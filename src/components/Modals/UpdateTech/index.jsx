import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";

export const UpdateTech = () => {
  const {register, handleSubmit} = useForm()
  return (
    <dialog>
      <header>
        <h2>Detalhes da Tecnologia</h2>
        <button className="closeButton__worksModal">X</button>
      </header>
      <form>
        <fieldset>
            <label htmlFor="title">Nome do projeto</label>
            <input type="text" name="title" placeholder="Desabilitado" disabled/>
        </fieldset>
        <fieldset>
          <label htmlFor="status">Status</label>
          <select name="status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
        </fieldset>
        <div>
          <button type="submit">Salvar alterações</button>
          <button>Excluir</button>
        </div>
      </form>
    </dialog>
  );
};


