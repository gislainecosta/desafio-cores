import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: var(--beige);

  > section {
    padding: 1rem;
  }
`;

export const ColorsHistory = styled.section`
  width: 22%;
  text-align: center;

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

export const Game = styled.section`
  width: 78%;
`;
