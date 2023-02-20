import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledFormLogin = styled.form`
    display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: var(--grey-3);
  margin: 0 12px;
  margin-top: 19.39px;
  border-radius: var(--radius-2);
  padding: 33.69px 18.05px;

  h1 {
    text-align: center;
    margin-bottom: 17px;
    font-size: var(--font-size-2);
    font-weight: var(--font-weight-1);
    color: var(--grey-0);
  }

  fieldset {
    display: flex;
    flex-direction: column;

    label {
      font-size: var(--font-size-4);
      font-weight: var(--font-weight-4);
      color: var(--grey-0);
    }

    input {
      height: 38px;
      margin-top: 17px;
      padding-left: 12px;
      border: none;
      border-radius: var(--radius-2);
      background-color: var(--grey-2);
      font-size: var(--font-size-3);
      font-weight: var(--font-weight-4);
      color: var(--grey-1);

      :focus{
        border-width: 0;
        outline-color: var(--grey-0);
      }
    }

    span{
      font-size: var(--font-size-4);
      font-weight: var(--font-weight-4);
      color: var(--grey-1);
      margin-top: 5px;
    }
  }

  p{
    font-size: var(--font-size-3);
    font-weight: var(--font-weight-2);
    color: var(--grey-1);
    text-align: center;
    margin-top: 27px;
  }
`;

export const StyledGreyLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--grey-1);
    height: 38.5px;
    border: none;
    border-radius: var(--radius-2);
    color: var(--grey-0);
    margin-top: 17.65px;
    font-size: var(--font-size-3);
    font-weight: var(--font-weight-3);
    color: var(--grey-0);

    :hover{
        background-color: var(--grey-2);
    }
`


