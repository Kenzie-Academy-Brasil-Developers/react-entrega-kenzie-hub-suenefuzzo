import React, { useContext } from "react";
import { HeaderDashboard } from "../../components/Header/HeaderDashboard";
import { StyledRedirectLink } from "../../components/Header/HeaderSecondary/style";
import { Loading } from "../../components/Loading";
import { UserContext } from "../../providers/UserContext";
import { StyledMainDashboard } from "./style";

export const Dashboard = () => {
  const { user, userLogout, loading } = useContext(UserContext);
  // console.log(user)
  //requisição de busca de usuario com usuário

  return (
    <>
      <HeaderDashboard>
        <StyledRedirectLink to="/" onClick={userLogout}>
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
              <p className="dashboard__message">
                Que pena! Estamos em desenvolvimento :(
              </p>
              <span className="dashboard__news">
                Nossa aplicação está em desenvolvimento, em breve teremos
                novidades
              </span>
            </section>
          </>
        )}
      </StyledMainDashboard>
    </>
  );
};
