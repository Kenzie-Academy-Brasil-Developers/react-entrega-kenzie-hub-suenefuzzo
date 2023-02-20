import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderDashboard } from "../../components/Header/HeaderDashboard";
import { StyledRedirectLink } from "../../components/Header/HeaderSecondary/style";
import { Loading } from "../../components/Loading";
import { api } from "../../services/api";
import { StyledMainDashboard } from "./style";

export const Dashboard = ({ user, setUser, loading, setLoading }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("@TOKEN");
        api.defaults.headers.authorization = `Bearer ${token}`;
        const response = await api.get("/profile");
        setUser(response.data);
      } catch (error) {
        console.log(error);
        navigate("/");
      } finally {
        setLoading(false);
      }
    };
    loggedUser();
  }, [setUser, navigate, setLoading]);

  const logOut = () => {
    localStorage.removeItem("@TOKEN");
    navigate("/");
  };

  return (
    <>
      <HeaderDashboard>
        <StyledRedirectLink to="/" onClick={logOut}>
          Sair
        </StyledRedirectLink>
      </HeaderDashboard>

      <StyledMainDashboard>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="container__userInfo">
              <section className="dashboard__userInfo">
              <h1>Olá, {user.name}</h1>
              <p>{user.course_module}</p>
            </section>
            </div>
            
            <section className="dashboard__warnings">
              <p className="dashboard__message">Que pena! Estamos em desenvolvimento :(</p>
              <span className="dashboard__news">Nossa aplicação está em desenvolvimento, em breve teremos novidades</span>
            </section>
          </>
        )}
      </StyledMainDashboard>
    </>
  );
};
