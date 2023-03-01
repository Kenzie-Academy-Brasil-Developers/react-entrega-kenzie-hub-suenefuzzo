import React, { useContext } from "react";
import { CardTech } from "../../components/CardTech";
import { HeaderDashboard } from "../../components/Header/HeaderDashboard";
import { StyledRedirectLink } from "../../components/Header/HeaderSecondary/style";
import { Loading } from "../../components/Loading";
import { TechsModal } from "../../components/Modals/TechsModal";
import { TechsContext } from "../../providers/TechsContext";
import { UserContext } from "../../providers/UserContext";
import { StyledMainDashboard } from "./style";

export const Dashboard = () => {
  const { user, userLogout, loading } = useContext(UserContext);
  const { addModal, setAddModal } = useContext(TechsContext);

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

            <section className="container__techs">
              <h3>Tecnologias</h3>
              <button
                onClick={() => setAddModal(true)}
                className="button__addTech"
              >
                +
              </button>
            </section>

            <div className="container__techsList">
              {user.techs?.length ? (
                <ul>
                  {user.techs.map((tech) => (
                    <CardTech
                      key={tech.id}
                      id={tech.id}
                      status={tech.status}
                      title={tech.title}
                    />
                  ))}
                </ul>
              ) : (
                <div className="container__message">
                  <p>Você ainda não registrou tecnologias!</p>
                </div>
              )}
            </div>
          </>
        )}

        {addModal ? <TechsModal /> : null}
      </StyledMainDashboard>
    </>
  );
};
