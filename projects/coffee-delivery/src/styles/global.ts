import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.baseText};
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.purple}; 
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: ${(props) => props.theme.text.m};
  }

  h1, h2, h3, h4 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    color: ${(props) => props.theme.colors.baseSubtitle};
  }

  button {
    cursor: pointer;
    border: 0;

    &:disabled {
      cursor: not-allowed;
    }
  }

`;

export const Container = styled.div`
  min-width: 1366px;
  margin: auto 15rem;
`