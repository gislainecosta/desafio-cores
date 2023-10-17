import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    --white: #eff1f0;
    --blue: #201454;
    --violet: #511970;
    --dark-blue: #1c1f30;
  }

  body {
    color: var(--blue);
    background-color: var(--white);
  }

  body, input, textarea, button {
    font: 400 1rem 'Mooli', sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
    padding: 1rem;
    margin: 0.25rem auto;

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.9);
    }
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
    width: 0.4rem;
  }

  ::-webkit-scrollbar-track {
    background: #eff1f010;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--white);
    border-radius: 20px;
  }
`;
