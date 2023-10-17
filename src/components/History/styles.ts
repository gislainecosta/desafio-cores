import styled from 'styled-components';

interface IStyleProps {
  background: string;
  color: string;
  width: string;
}

export const History = styled.article`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;

  div {
    display: flex;
    justify-content: space-between;
    width: 70%;
  }
`;

export const ColorText = styled.p<IStyleProps>`
  text-transform: uppercase;
  text-align: center;
  padding: 1rem 0;
  width: ${(props) => props.width};
  font-weight: bold;
  border-radius: 1rem;
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
`;
