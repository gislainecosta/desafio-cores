import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const ColorsHistory = styled.div`
  width: 30%;
  text-align: center;
  padding: 1rem;

  > div {
    overflow-y: scroll;
    height: 100%;
    padding-right: 1rem;

    > header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 1rem auto;
    }
  }
`;

export const Game = styled.div`
  width: 50%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr 4fr 1fr;
  padding: 2rem;

  > button {
    background-color: var(--dark-blue);
    color: var(--white);
    font-weight: bold;
    border-radius: 1rem;
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
    height: 3.7rem;
    margin-bottom: 0.1rem;
    width: 8rem;
    padding: 0.5rem 1rem;

    p {
      padding: 0.1rem 0;
    }

    p:nth-of-type(2) {
      text-align: right;
    }

    p:nth-of-type(1),
    p:nth-of-type(2) {
      border-bottom: 1px solid #919191;
    }

    P:last-of-type {
      font-size: 1.2rem;
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

export const Color = styled.section`
  grid-area: 3/1/4/4;
  display: flex;
  align-items: center;
  justify-content: center;

  div,
  img {
    width: 20rem;
    height: 20rem;
    position: relative;
    top: 0rem;
    left: 0rem;
  }

  img {
    z-index: 10;
  }
`;

export const Restart = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;

  img {
    width: 4rem;
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

  img {
    height: 4rem;
    display: block;
    margin: 0 auto;
  }

  p:last-of-type {
    z-index: 1;
    position: absolute;
    color: var(--white);
    top: 1.8rem;
    left: 46%;
    text-align: center;
  }
`;
