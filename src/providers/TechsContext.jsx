import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechsContext = createContext({});

export const TechsProvider = ({ children }) => {
  const token = localStorage.getItem("@TOKEN");
  const { setUser } = useContext(UserContext);
  const [addModal, setAddModal] = useState(false);

  useEffect(() => {
    const techsLoad = async () => {
      try {
        const response = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    techsLoad();
  }, [setUser, token]);


  const createTech = async (data) => {
    try {
      await api.post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Nova tecnologia criada!");
      setAddModal(false)
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
    await api.delete(`/users/techs/${idTech}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    toast.success("Tecnologia removida!");
  };

  return (
    <TechsContext.Provider value={{ createTech, updateTech, deleteTech, addModal, setAddModal }}>
      {children}
    </TechsContext.Provider>
  );
};
