import { StyledFormLogin, StyledGreyLink } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from "./validations";
import { StyledPinkButton } from "../../Button/style";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";

export const FormLogin = () => {
  const {userLogin} = useContext(UserContext);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  return (
    <StyledFormLogin onSubmit={handleSubmit(userLogin)}>
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
