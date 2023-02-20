import styled from "styled-components";

export const StyledPinkButton = styled.button`
    background-color: var(--color-primary);
    height: 38.5px;
    border: none;
    border-radius: var(--radius-2);
    color: var(--grey-0);
    margin-top: 17.65px;

    :hover{
        background-color: var(--color-primary-focus);
    }

    :disabled{
        background-color: var(--color-primary-negative);
    }
`;

export const StyledGreyButton = styled(StyledPinkButton)`
    background-color: var(--grey-1);

    :hover{
        background-color: var(--grey-2);
    }
`

export const StyledDarkGreyButton =  styled(StyledPinkButton)`
    background-color: var(--grey-3);
    padding: 4px 25px;
    min-width: 84.09px;
`;