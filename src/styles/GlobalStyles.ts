import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  html {
    scrollbar-gutter: stable;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    background-color: ${({ theme }) => theme.colors.background.default};
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-y: scroll;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary.dark};
    }
  }

  button {
    font-family: inherit;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing(2)};
  }
`;
