import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeaderSecondary = styled.header`
  div {
    width: 92%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 113px;

    img {
      width: 97.59px;
      height: 16.9px;
    }
  }

  @media (min-width: 375px) {
    div {
      max-width: 340px;
    }
  }

  @media (min-width: 768px) {
    div {
      width: 768px;
    }
  }
`;

export const StyledRedirectLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--grey-3);
  height: 38.5px;
  padding: 4px 25px;
  border: none;
  border-radius: var(--radius-2);
  color: var(--grey-0);
  margin-top: 17.65px;
  font-size: var(--font-size-4);
  font-weight: var(--font-weight-2);
  color: var(--grey-0);

  :hover {
    filter: brightness(0.9);
  }
`;
