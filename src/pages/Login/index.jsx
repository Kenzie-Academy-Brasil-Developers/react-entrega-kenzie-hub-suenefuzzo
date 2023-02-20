import React from "react";
import { FormLogin } from "../../components/Form/FormLogin";
import { HeaderPrimary } from "../../components/Header/HeaderPrimary";
import { StyledMain } from "./style";

export const Login = ({setUser}) => {
  return (
    <>
      <HeaderPrimary />
      <StyledMain>
        <FormLogin setUser={setUser}/>
      </StyledMain>
    </>
  );
};
