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
  }
`;

export const Logo = styled.img`
  width: 42rem;
  display: block;
  margin: auto;
`;

export const Name = styled.img`
  width: 12rem;
  display: block;
  margin: auto;
`;
