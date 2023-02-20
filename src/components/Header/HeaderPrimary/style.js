import styled from "styled-components";

export const StyledHeaderPrimary = styled.header`
  height: 114px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  gap: 81px;

  div {
    display: flex;
    align-items: flex-end;

    .header__logo{
      width: 101px;
      height: 14px;
    }
  }

  @media (min-width: 375px){
        max-width: 369px;
        margin: 0 auto;
    }

  @media (min-width: 768px){
    div .header__logo{
      width: 144px;
      height: 19px;
    }
  }
`;
