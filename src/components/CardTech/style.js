import styled from "styled-components";

export const StyledCard = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 8px;
    height: 35px;
    padding: 8px;
    border-radius: var(--radius-2);
    background-color: var(--grey-4);

    h3{
        color: var(--grey-0);
    }

    p{
        color: var(--grey-1);
    }
`;