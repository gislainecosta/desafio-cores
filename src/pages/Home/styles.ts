import styled from 'styled-components';
import Background from '../../images/painting_easel.png';

export const Container = styled.div`
  justify-content: space-around;
  width: 100%;
  height: 100%;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: var(--white);

  > section {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Logo = styled.img`
  width: 42rem;
  display: block;
  margin: auto;
`;

export const Name = styled.img`
  width: 16rem;
  display: block;
  margin-bottom: 2rem;
`;

export const Ranking = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 85%;
  justify-content: start;
  background: url(${Background});
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

export const Positions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 92%;
`;
