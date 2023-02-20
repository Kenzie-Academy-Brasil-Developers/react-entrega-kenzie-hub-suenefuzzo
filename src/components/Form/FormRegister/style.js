import styled from "styled-components";

export const StyledFormRegister = styled.form`
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
        /* border-width: 1px; */
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
