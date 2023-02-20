import React from "react";
import { StyledHeaderDashboard } from "./style";

export const HeaderDashboard = ({children}) => {
  return (
    <StyledHeaderDashboard>
        <div className="StyledHeaderDashboard__container">
        <img className="header__logo" src="/logoKh.svg" alt="Logo" />
        {children}
      </div>
    </StyledHeaderDashboard>
  )
};


