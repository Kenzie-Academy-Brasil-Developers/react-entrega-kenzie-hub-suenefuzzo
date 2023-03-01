import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const userRegister = async (data) => {
    try {
      await api.post("/users", data);
      toast.success("Usuário cadastrado com sucesso");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Ops! Algo deu errado");
    }
  };

  const userLogin = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      localStorage.setItem("@TOKEN", response.data.token);
      setUser(response.data.user);
      toast.success("Login realizado com sucesso");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Email ou senha incorretos");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    if (token) {
      const autoLogin = async () => {
        try {
          setLoading(true);

          const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
          navigate("/dashboard")
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      autoLogin();
    }
  }, [navigate]);

  const userLogout = () => {
    setUser("");
    localStorage.removeItem("@TOKEN");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, userRegister, userLogin, userLogout, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};
