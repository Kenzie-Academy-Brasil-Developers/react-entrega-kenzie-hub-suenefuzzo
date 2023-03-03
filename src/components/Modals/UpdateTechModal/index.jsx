import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechsContext } from "../../../providers/TechsContext";
// import { UserContext } from "../../../providers/UserContext";
import { StyledGreyButton, StyledPinkButton } from "../../Button/style";
import { StyledModalUpdate } from "./style";

export const UpdateTechModal = () => {
  const { register, handleSubmit } = useForm();
  const {
    setUpdateModal,
    techId,
    deleteTech,
    updateTech,
    // userState,
    techStatus,
  } = useContext(TechsContext);
  // const { user } = useContext(UserContext);

  const onSubmit = () => {
    updateTech();
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <label htmlFor="title">Nome do projeto</label>
            <input type="text" name="title" placeholder="Título" disabled />
          </fieldset>
          <fieldset>
            <label htmlFor="status">Status</label>
            <select name="status" {...register("status")}>
              <option value="">{techStatus}</option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </fieldset>
          <div className="container__buttons">
            <StyledPinkButton type="submit">Salvar alterações</StyledPinkButton>
            <StyledGreyButton type="button" onClick={() => deleteTech(techId)}>
              Excluir
            </StyledGreyButton>
          </div>
        </form>
      </div>
    </StyledModalUpdate>
  );
};
