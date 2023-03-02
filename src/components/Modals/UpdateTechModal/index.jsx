import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechsContext } from "../../../providers/TechsContext";
import { UserContext } from "../../../providers/UserContext";
import { StyledGreyButton, StyledPinkButton } from "../../Button/style";
import { StyledModalUpdate } from "./style";

export const UpdateTechModal = () => {
  const { register, handleSubmit } = useForm();

  const { setUpdateModal, idTech, deleteTech, updateTech, userState, userLevel } = useContext(TechsContext);
  const { user } = useContext(UserContext);

  const [techId, setTechId] = useState(null);
  useEffect(() => {
    setTechId(user.techs.map((tech) => tech.id));
  }, [user]);

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
        <form onSubmit={handleSubmit(updateTech)}>
          <fieldset>
            <label htmlFor="title">Nome do projeto</label>
            <input
              type="text"
              name="title"
              placeholder={userState}
              disabled
            />
          </fieldset>
          <fieldset>
            <label htmlFor="status">Status</label>
            <select name="status" {...register("status")}>
              <option value="">{userLevel}</option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </fieldset>
          <div className="container__buttons">
            {/* <StyledPinkButton id={idTech} type="submit">Salvar alterações</StyledPinkButton> */}
            <button id={idTech} type="submit">Salvar</button>
            {/* <StyledGreyButton>Excluir</StyledGreyButton> */}
            <button type="button" onClick={() => deleteTech(techId)}>Excluir 2</button>
          </div>
        </form>
      </div>
    </StyledModalUpdate>
  );
};
