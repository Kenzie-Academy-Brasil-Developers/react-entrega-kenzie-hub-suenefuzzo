import React from "react";
import { useContext } from "react";
import { TechsContext } from "../../providers/TechsContext";
import { StyledCard } from "./style";

export const CardTech = ({id, title, status}) => {
  const {setIdTech, setUpdateModal} = useContext(TechsContext)

  const submit = () => {
    setIdTech(id)
    setUpdateModal(true)
  };

  return (
    <StyledCard onClick={submit}>
      <h3>{title}</h3>
      <p>{status}</p>
    </StyledCard>
  )
}


