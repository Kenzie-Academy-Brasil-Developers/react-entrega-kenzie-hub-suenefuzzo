import styled from "styled-components";

export const StyledHeaderDashboard = styled.header`
  width: 92%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 73px;

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  @media (min-width: 768px){
    div{
        max-width: 768px;
        margin: 0 auto;
    }
  }
`;
