import styled from 'styled-components';
import RankingBackground from '../../images/painting_easel.png';
import ButtonBackground from '../../images/button.png';

export const Container = styled.div`
  justify-content: space-around;
  width: 100%;
  height: 100%;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  > section {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    font-family: 'Finger Paint', sans-serif;
    background: url(${ButtonBackground});
    background-size: 100% 100%;
    color: var(--white);
    padding: 1.5rem 2rem;
  }
`;

export const Logo = styled.img`
  width: 42rem;
  display: block;
  margin: auto;
`;

export const Name = styled.img`
  width: 20rem;
  display: block;
  margin-bottom: 2rem;
`;

export const Ranking = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 85%;
  justify-content: start;
  background: url(${RankingBackground});
  background-size: 100% 100%;
  padding: 24% 2rem;
  font-family: 'Finger Paint', sans-serif;

  > p {
    font-weight: bold;
  }

  > p:first-of-type {
    font-size: 1.4rem;
    margin-bottom: 0.6rem;
  }

  > p:last-of-type {
    font-size: 0.8rem;
    text-align: right;
    width: 78%;
  }

  > div {
    width: 78%;
  }
`;

export const Positions = styled.article`
  display: flex;
  justify-content: space-between;
  width: 92%;
`;
