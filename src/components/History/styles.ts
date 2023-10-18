import styled from 'styled-components';

interface IStyleProps {
  background?: string;
  color?: string;
  width?: string;
  border?: string;
}

export const History = styled.article<IStyleProps>`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0 2rem;
  }

  section:last-of-type {
    gap: 0.2rem;
  }
`;

export const ColorText = styled.p<IStyleProps>`
  text-transform: uppercase;
  text-align: center;
  padding: 1rem 0.8rem;
  width: ${(props) => props.width};
  font-weight: bold;
  border-radius: 1rem;
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  letter-spacing: 0.1rem;
  border: ${(props) => props.border};
`;
