import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap');
    
    :root{
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;

        --grey-0: #F8F9FA;
        --grey-1: #868E96;
        --grey-2: #343B41;
        --grey-3: #212529;
        --grey-4: #121214;
        
        --color-sucess: #3FE864;
        --color-negative: #E83F5B;

        --font-size-1: 1rem; /*16px*/
        --font-size-2: 0.875rem; /*14px*/
        --font-size-3: 0.75rem; /*12px*/
        --font-size-4: 0.563rem; /*9px*/

        --font-weight-1: 700;
        --font-weight-2: 600;
        --font-weight-3: 500;
        --font-weight-4: 400;

        --radius-1: 4px;
        --radius-2: 3.2px;
    }

    #root{
        height: 100vh;
    }

    body{
        font-family: "Inter", sans-serif;
        background-color: var(--grey-4);
        overflow-x: hidden !important;
        overflow-y: hidden !important;
    }

    button{
        cursor: pointer;
    }
`;
