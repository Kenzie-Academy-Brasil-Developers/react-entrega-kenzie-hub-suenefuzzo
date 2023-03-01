import styled from "styled-components";

export const StyledModalTechs = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #12121450;
  position: absolute;

  .modal {
    background-color: var(--grey-3);
    margin: 131px auto;
    border-radius: var(--radius-1);

    header {
      display: flex;
      justify-content: space-between;
      background-color: var(--grey-2);
      padding: 12px 20px;
      border-top-left-radius: var(--radius-1);
      border-top-right-radius: var(--radius-1);

      h2 {
        font-size: var(--font-size-2);
        font-weight: var(--font-weight-1);
        color: var(--grey-0);
      }

      .closeButton__techsModal {
        border: none;
        background-color: transparent;
        color: var(--grey-1);
        font-size: var(--font-size-1);
      }
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 12px 20px;

      fieldset {
        display: flex;
        flex-direction: column;

        label{
            font-size: var(--font-size-3);
            font-weight: var(--font-weight-4);
            color: var(--grey-0);
        }

        input, select{
            height: 35px;
            margin-top: 10px;
            border-radius: var(--radius-2);
            border: none;
            background-color: var(--grey-2);
            color: var(--grey-0);
            padding-left: 5px;

            :focus{
                outline-color: var(--grey-0);
            }
        }

      }

      .button__submit{
        margin-bottom: 15px;
      }
    }
  }

  @media (min-width: 369px) {
    .modal {
      max-width: 369px;
    }
  }
`;
