import React from "react";
import { StyledHeaderSecondary } from "./style";

export const HeaderSecondary = ({ children}) => {
  return (
    <StyledHeaderSecondary >
      <div className="header__container">
        <img className="header__logo" src="/logoKh.svg" alt="Logo" />
        {children}
      </div>
    </StyledHeaderSecondary>
  );
};
