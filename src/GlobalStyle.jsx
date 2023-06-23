import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --main-bg-color: #1a2431;
    --main-ft-color: #e4e4e4;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: var(--main-bg-color);
    color: var(--main-ft-color);
  }
`;

export default GlobalStyle;
