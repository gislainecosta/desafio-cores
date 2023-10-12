import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    --background: #eff1f0;
    --text: #28334b;
  }

  body {
    background-color: var(--background);
    color: var(--text);
  }

  body, input, textarea, button {
    font: 400 1rem 'Mooli', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media(max-width: 1080px) {
    html{
        font-size: 93.75% ;
    }
  }

  @media(max-width: 720px) {
    html{
        font-size: 87.5%;
    }
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--violet);
    border-radius: 20px;
    border: 3px solid black;
  }
`
