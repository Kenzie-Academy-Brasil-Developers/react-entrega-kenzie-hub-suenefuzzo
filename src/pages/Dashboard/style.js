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

    .dashboard__message {
      font-size: 1.125rem;
      font-weight: var(--font-weight-1);
      color: var(--grey-0);
      line-height: 1.75rem;
    }

    .dashboard__news {
      font-size: var(--font-size-1);
      font-weight: var(--font-weight-4);
      color: #ffffff;
      line-height: 1.5rem;
    }
  }

  @media (min-width: 768px) {
    .dashboard__userInfo {
      min-width: 769px;
      margin: 0 auto;
    }

    .dashboard__warnings{
      min-width: 769px;
      margin: 0 auto;
      
    }
  }
`;

// export const StyledHeaderDashboard = styled.header`
//   div {
//     width: 92%;
//     margin: 0 auto;
//     display: flex;
//     justify-content: space-between;
//     align-items: flex-end;
//     height: 113px;
//     background-color: red;

//     img {
//       width: 97.59px;
//       height: 16.9px;
//     }
//   }



//   @media (min-width: 768px) {
//     div {
//       max-width: 768px;
//     }
//   }
// `
