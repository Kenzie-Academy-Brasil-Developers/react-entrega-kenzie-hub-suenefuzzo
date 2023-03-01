import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechsContext } from "../../../providers/TechsContext";
import { StyledGreyButton, StyledPinkButton } from "../../Button/style";
import { StyledModalUpdate } from "./style";

export const UpdateTechModal = () => {
  const { register, handleSubmit } = useForm();
  const { setUpdateModal } = useContext(TechsContext);

  return (
    <StyledModalUpdate className="container__modal">
      <div className="modal">
        <header>
          <h2>Detalhes da Tecnologia</h2>
          <button
            onClick={() => setUpdateModal(false)}
            className="closeButton__worksModal"
          >
            X
          </button>
        </header>
        <form>
          <fieldset>
            <label htmlFor="title">Nome do projeto</label>
            <input
              type="text"
              name="title"
              placeholder="Desabilitado"
              disabled
            />
          </fieldset>
          <fieldset>
            <label htmlFor="status">Status</label>
            <select name="status" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </fieldset>
          <div className="container__buttons">
            <StyledPinkButton type="submit">Salvar alterações</StyledPinkButton>
            <StyledGreyButton>Excluir</StyledGreyButton>
          </div>
        </form>
      </div>
    </StyledModalUpdate>
  );
};
