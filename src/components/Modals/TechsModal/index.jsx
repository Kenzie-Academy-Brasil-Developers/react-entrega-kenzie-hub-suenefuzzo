import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechsContext } from "../../../providers/TechsContext";
import { schema } from "./validations";

export const TechsModal = () => {
  const { setAddModal } = useContext(TechsContext);
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className="container__modal">
      <div className="modal">
        <header>
          <h2>Cadastrar Tecnologia</h2>
          <button
            onClick={() => setAddModal(false)}
            className="closeButton__techsModal"
          >
            X
          </button>
        </header>
        <form>
          <fieldset>
            <label htmlFor="title">Nome</label>
            <input
              type="text"
              id="title"
              placeholder="Nome da tecnologia"
              {...register("title")}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="status">Selecionar status</label>
            <select id="status" {...register("status")}>
              <option value="">Selecione um status</option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </fieldset>
          <button type="submit">Cadastrar Tecnologia</button>
        </form>
      </div>
    </div>
  );
};
