import React from "react";
import { useContext } from "react";
import { TechsContext } from "../../providers/TechsContext";
import { StyledCard } from "./style";

export const CardTech = ({id, title, status}) => {
  const {setTechId, setUpdateModal} = useContext(TechsContext)

  const submit = () => {
    setTechId(id)
    setUpdateModal(true)
  };

  return (
    <StyledCard id={id} onClick={submit}>
      <h3>{title}</h3>
      <p>{status}</p>
    </StyledCard>
  )
}


