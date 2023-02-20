import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const RoutesApp = ({ user, setUser, loading, setLoading }) => {
  return (
    <Routes>
      <Route path="/" element={<Login user={user} setUser={setUser} />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <Dashboard
            user={user}
            setUser={setUser}
            loading={loading}
            setLoading={setLoading}
          />
        }
      />
    </Routes>
  );
};
