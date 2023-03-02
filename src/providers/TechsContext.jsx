import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechsContext = createContext({});

export const TechsProvider = ({ children }) => {
  const token = localStorage.getItem("@TOKEN");
  const idUser = localStorage.getItem("@USERID");
  const { user, setUser } = useContext(UserContext);

  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [idTech, setIdTech] = useState("");

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

  const updateTech = async (idTech, data) => {
    try {
      await api.put(`/users/techs/${idTech}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia atualizada");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTech = async (idTech) => {
    try {
      await api.delete(`/users/techs/${idTech}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newList = user.techs.filter((tech) => tech.id !== idTech);
      setUser({...user, techs : [...newList]})
      toast.success("Tecnologia removida!");
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
        idTech,
        setIdTech,
      }}
    >
      {children}
    </TechsContext.Provider>
  );
};
