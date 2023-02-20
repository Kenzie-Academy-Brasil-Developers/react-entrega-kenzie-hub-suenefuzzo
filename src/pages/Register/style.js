import styled from "styled-components";

export const StyledMainRegister = styled.main`
    height: 100vh;
    
    .select__module{
        height: 38px;
        border-radius: var(--radius-2);
        border: none;
        color: var(--grey-1);
        background-color: var(--grey-2);
        font-size: var(--font-size-3);
        font-weight: var(--font-weight-4);
        margin-top: 15px;

        :focus{
            outline: none;
        }
    }

    @media (min-width: 375px){
        max-width: 369px;
        margin: 0 auto;
    }
`