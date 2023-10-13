import { createGlobalStyle } from 'styled-components';
import Background from './images/button.png';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    --white: #eff1f0;
    --dark-blue: #201454;
    --violet: #511970;
  }

  body {
    background-color: var(--white);
    color: var(--dark-blue);
  }

  body, input, textarea, button {
    font: 400 1rem 'Mooli', sans-serif;
  }

  button {
    cursor: pointer;
    background: url(${Background});
    background-size: 100% 100%;
    border: none;
    color: var(--white);
    padding: 1rem;
    font-family: 'Finger Paint', sans-serif;
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
`;
