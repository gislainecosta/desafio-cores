import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: var(--beige);
`;

export const ColorsHistory = styled.div`
  width: 22%;
  text-align: center;
  padding: 1rem;
  border: 1px solid red;

  > div {
    overflow-y: scroll;
    height: 100%;
    padding-right: 1rem;

    > header {
      display: flex;
      justify-content: space-between;
      margin: 1rem auto;
    }
  }
`;

export const Game = styled.div`
  width: 78%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr 4fr 1fr;
  padding: 2rem;

  section {
    border: 1px solid black;
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
`;
