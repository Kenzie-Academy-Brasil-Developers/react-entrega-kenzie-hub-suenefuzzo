import React from "react";

export const CardTech = ({id, title, status}) => {
  return (
    <li>
      <h3>{title}</h3>
      <p>{status}</p>
    </li>
  )
}


