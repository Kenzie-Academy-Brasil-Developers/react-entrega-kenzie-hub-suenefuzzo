import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

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
