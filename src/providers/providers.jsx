import React from "react";
import { TechsProvider } from "./TechsContext";
import { UserProvider } from "./UserContext";

export const Providers = ({ children }) => {
  return (
    <UserProvider>
      <TechsProvider>
        {children}
      </TechsProvider>
    </UserProvider>
  );
};
