// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledFormLogin, StyledGreyLink } from "./style";
import { useForm } from "react-hook-form";
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from "./validations";
import { StyledPinkButton } from "../../Button/style";

export const FormLogin = ({setUser}) => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const navigate = useNavigate();

  const submitLogin = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      localStorage.setItem("@TOKEN", response.data.token)
      setUser(response.data.user)
      toast.success("Login realizado com sucesso");
      navigate("/dashboard");
    } catch (error) {
      console.error(error)
      toast.error("Email ou senha incorretos");
    }
  };

  return (
    <StyledFormLogin onSubmit={handleSubmit(submitLogin)}>
      <h1>Login</h1>
      <fieldset>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        <span>{errors.email?.message}</span>
      </fieldset>
      <fieldset>
        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        <span>{errors.password?.message}</span>
      </fieldset>
      <StyledPinkButton type="submit">Entrar</StyledPinkButton>
      <p>Ainda não possui uma conta?</p>
      <StyledGreyLink to="/register">Cadastre-se</StyledGreyLink>
    </StyledFormLogin>
  );
};
