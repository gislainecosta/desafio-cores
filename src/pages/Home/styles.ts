import styled from 'styled-components';

export const HomeContainer = styled.div`
  justify-content: space-around;
  width: 100%;
  height: 100%;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  > section {
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
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
`;

export const Ranking = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70%;
  justify-content: start;

  > p {
    font-weight: bold;
    font-size: 2rem;
  }

  > div {
    margin-top: 1rem;
    border: 1px solid red;
    width: 80%;
    padding: 1rem;
  }
`;

export const Positions = styled.div`
  display: flex;
  justify-content: space-between;
`;
