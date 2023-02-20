import { StyledPinkButton } from "../../Button/style";
import { StyledFormRegister } from "./style";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validations";

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const submitRegister = async (data) => {
    try {
      await api.post("/users", data);
      toast.success("Usuário cadastrado com sucesso");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Ops! Algo deu errado");
    }
  };

  return (
    <StyledFormRegister onSubmit={handleSubmit(submitRegister)}>
      <h1>Crie sua conta</h1>
      <p>Rápido e grátis, vamos nessa</p>
      <fieldset>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          type="text"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        <span>{errors.name?.message}</span>
      </fieldset>
      <fieldset>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="text"
          placeholder="Digite aqui seu e-mail"
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
      <fieldset>
        <label htmlFor="confirm_password">Confirmar senha</label>
        <input
          id="confirm_password"
          type="password"
          placeholder="Confirme sua senha aqui"
          {...register("confirm_password")}
        />
        <span>{errors.confirm_password?.message}</span>
      </fieldset>
      <fieldset>
        <label htmlFor="bio">Bio</label>
        <input
          id="bio"
          type="text"
          placeholder="Fale sobre você"
          {...register("bio")}
        />
        <span>{errors.bio?.message}</span>
      </fieldset>
      <fieldset>
        <label htmlFor="contact">Contato</label>
        <input
          id="contact"
          type="text"
          placeholder="Opções de contato"
          {...register("contact")}
        />
        <span>{errors.contact?.message}</span>
      </fieldset>
      <fieldset>
        <label htmlFor="course_module">Selecionar módulo</label>
        <select
          id="course_module"
          className="select__module"
          {...register("course_module")}
        >
          <option value="">Selecione um módulo</option>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
        </select>
        <span>{errors.course_module?.message}</span>
      </fieldset>
      <StyledPinkButton type="submit">Cadastrar</StyledPinkButton>
    </StyledFormRegister>
  );
};


