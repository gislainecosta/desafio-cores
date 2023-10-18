import styled from 'styled-components';
import Crono from 'src/images/timer.png';

interface IStyleProps {
  background: string;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
`;

export const ColorsHistory = styled.div`
  width: 30%;
  text-align: center;
  padding: 1rem;
  background-color: var(--dark-blue);
  color: var(--white);

  > header {
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    word-break: normal;
    background-color: var(--white);
    color: var(--dark-blue);
    text-align: center;
    margin: 1rem 0 0 0;
    border-radius: 0.5rem 0.5rem 0 0;
  }

  > main {
    overflow-y: scroll;
    height: 90%;
    padding: 1.2rem 1rem 2rem 1rem;
  }

  > p {
    font-weight: bold;
    text-align: center;
    font-size: 1.5rem;
  }
`;

export const Game = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr 4.5fr 0.5fr;
  padding: 1rem 0;

  > button {
    background-color: var(--dark-blue);
    color: var(--white);
    font-weight: bold;
    border-radius: 1rem;
    height: 3rem;
    letter-spacing: 0.1rem;
  }
`;

export const Score = styled.div`
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;

  > p {
    font-weight: bold;
    font-size: 1rem;
    text-align: center;
  }

  section {
    display: grid;
    grid-template-columns: 4fr 1fr;
    color: var(--white);
    background-color: var(--dark-blue);
    border-radius: 1rem;
    height: 4.8rem;
    margin-bottom: 0.4rem;
    width: 8rem;
    padding: 0.1rem 0.8rem;

    p {
      padding: 0.5rem 0;
    }

    p:nth-of-type(2) {
      text-align: right;
    }

    p:nth-of-type(1),
    p:nth-of-type(2) {
      border-bottom: 1px solid #919191;
    }

    P:last-of-type {
      font-size: 1.5rem;
      text-align: right;
    }
  }
`;

export const Name = styled.img`
  width: 24rem;
  display: block;
  margin: auto;
`;

export const Title = styled.section`
  grid-area: 1/1/2/4;
`;

export const Color = styled.section<IStyleProps>`
  grid-area: 3/1/4/4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 1rem 0;

  div:last-of-type {
    background-color: ${(props) => props.background};
    border-radius: 50%;
    width: 16rem;
    height: 16rem;
    position: absolute;
    z-index: 0;
  }

  div {
    position: absolute;
    z-index: 1;
    border-radius: 50%;
    background-color: var(--light-blue);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Restart = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;

  img {
    height: 6rem;
    display: block;
    margin: auto;
    cursor: pointer;
  }

  button {
    font-weight: bold;
    background-color: transparent;
    padding: 0;
    margin: 0;
    color: var(--blue);
  }
`;

export const CronoImg = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  color: var(--blue);
  position: relative;

  div {
    background: url(${Crono});
    background-size: 100% 100%;
    color: var(--white);
    height: 6rem;
    width: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 0.4rem;
    font-size: 2rem;

    p {
      color: var(--white);
    }
  }
`;

export const Actions = styled.div`
  padding: 1rem 0;
  p {
    text-align: center;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;

    button {
      color: var(--blue);
      font-weight: bold;
      padding: 0;
    }

    img {
      width: 4rem;
      height: 4rem;
      cursor: pointer;
    }
  }
`;
