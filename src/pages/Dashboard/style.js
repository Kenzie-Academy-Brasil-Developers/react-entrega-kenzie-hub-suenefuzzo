import styled from "styled-components";

export const StyledMainDashboard = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .container__userInfo {
    display: flex;
    align-items: center;
    width: 100vw;
    height: 131px;
    border-top: 1px groove var(--grey-1);
    border-bottom: 1px groove var(--grey-1);
    margin-top: 25px;
    margin-bottom: 15px;

    .dashboard__userInfo {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 0px 12px;

      h1 {
        font-size: 1.125rem;
        font-weight: var(--font-weight-1);
        color: var(--grey-0);
      }

      p {
        font-size: var(--font-size-3);
        font-weight: var(--font-weight-4);
        color: var(--grey-1);
        line-height: 1.375rem;
      }
    }
  }

  .dashboard__warnings {
    display: flex;
    flex-direction: column;
    gap: 23px;
    padding: 12px;
  }

  .container__techs {
    display: flex;
    justify-content: space-between;
    gap: 23px;
    padding: 12px;
    width: 100%;

    h3 {
      font-size: 1.125rem;
      font-weight: var(--font-weight-1);
      color: var(--grey-0);
      line-height: 1.75rem;
    }

    .button__addTech {
      width: 32px;
      height: 32px;
      font-size: 1.75rem;
      padding: 0;
      border-radius: var(--radius-2);
      border: none;
      background-color: var(--grey-3);
      color: var(--grey-0);
    }
  }

  .container__techsList {
    background-color: var(--grey-3);
    border-radius: var(--radius-2);
    width: 95%;
  }

  .container__message {
    margin-top: 30px;
    p {
      color: var(--grey-0);
      font-size: var(--font-size-1);
      font-weight: var(--font-weight-2);
    }
  }

  @media (min-width: 768px) {
    .container__userInfo {
      .dashboard__userInfo {
        min-width: 769px;
        margin: 0 auto;
        flex-direction: row;
        justify-content: space-between;
      }
    }

    .dashboard__warnings {
      min-width: 769px;
      margin: 0 auto;
    }

    .container__techs {
      max-width: 769px;
      margin: 0 auto;
    }

    .container__techsList{
      width: 98%;
      max-width: 769px;
      margin: 0 auto;
    }
  }
`;
