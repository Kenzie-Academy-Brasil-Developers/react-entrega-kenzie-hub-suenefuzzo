import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechsContext = createContext({});

export const TechsProvider = ({ children }) => {
  const token = localStorage.getItem("@TOKEN");

  const { user, setUser } = useContext(UserContext);
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [techId, setTechId] = useState(null);
  const [techStatus, setTechStatus] = useState(null);

  const createTech = async (data) => {
    try {
      const response = await api.post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser({ ...user, techs: [...user.techs, response.data] });
      toast.success("Nova tecnologia criada!");
      setAddModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTech = async (techId, data) => {
    try {
      console.log(techId)
      const response = await api.put(`/users/techs/${techId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response)
      setUser({...user, tech: [response.data.status]})
      toast.success("Tecnologia atualizada");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTech = async (techId) => {
    try {
      await api.delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newList = user.techs.filter((tech) => tech.id !== techId);
      setUser({...user, techs : [...newList]})
      toast.warning("Tecnologia removida!");
      setUpdateModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechsContext.Provider
      value={{
        createTech,
        updateTech,
        deleteTech,
        addModal,
        setAddModal,
        updateModal,
        setUpdateModal,
        techId,
        setTechId,
        techStatus,
        setTechStatus,
      }}
    >
      {children}
    </TechsContext.Provider>
  );
};
