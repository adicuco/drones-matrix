import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    outline: none;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  a:link {
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
    text-decoration: underline;
}
  
  #root {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }`;

export default GlobalStyles;
