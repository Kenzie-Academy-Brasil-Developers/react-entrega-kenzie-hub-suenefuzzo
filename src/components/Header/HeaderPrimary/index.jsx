import React from "react";
import { StyledHeaderPrimary } from "./style";

export const HeaderPrimary = () => {
  return (
    <StyledHeaderPrimary>
      <div>
        <img className="header__logo" src="/logoKh.svg" alt="Logo" />
      </div>
    </StyledHeaderPrimary>
  );
};
