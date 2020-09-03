import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  #app {
    background-color: white;
    min-height: 100%;
    min-width: 100%;
    display: flex;
    flex-flow: column;
    height: 100%;
  }
`;

export default GlobalStyle;
