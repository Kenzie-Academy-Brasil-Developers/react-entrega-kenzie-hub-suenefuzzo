import React from "react";
import { FormRegister } from "../../components/Form/FormRegister";
import { HeaderSecondary } from "../../components/Header/HeaderSecondary";
import { StyledRedirectLink } from "../../components/Header/HeaderSecondary/style";
import { StyledMainRegister } from "./style";

export const Register = () => {
  return (
    <>
      <HeaderSecondary>
        <StyledRedirectLink to="/">Voltar</StyledRedirectLink>
      </HeaderSecondary>
      <StyledMainRegister>
        <FormRegister />
      </StyledMainRegister>
    </>
  );
};
