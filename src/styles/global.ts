import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  *, a, button, input, li {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    border-width: 0;
    list-style: none;
    background: none;
    font-family: ${({ theme }) => theme.FONTS.POPPINS};
  }
  
  body {
    min-height: 100vh;
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.WHITE_400};
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }
  
  a {
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  #root {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
    position: relative;
  }
`;
