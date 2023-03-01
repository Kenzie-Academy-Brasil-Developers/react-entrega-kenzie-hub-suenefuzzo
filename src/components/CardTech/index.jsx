import React from "react";
import { StyledCard } from "./style";

export const CardTech = ({id, title, status}) => {
  return (
    <StyledCard>
      <h3>{title}</h3>
      <p>{status}</p>
    </StyledCard>
  )
}


