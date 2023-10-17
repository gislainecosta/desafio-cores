import styled from 'styled-components';

interface IStyleProps {
  percentage: number;
  dashArray: number;
  dashOffset: number;
}

export const Container = styled.svg<IStyleProps>`
  position: absolute;
  z-index: 1;
  border-radius: 50%;
  border: 1px solid #0000003d;
  -webkit-box-shadow: -7px 6px 12px -9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -7px 6px 12px -9px rgba(0, 0, 0, 0.75);
  box-shadow: -7px 6px 12px -9px rgba(0, 0, 0, 0.75);

  circle {
    fill: none;
    stroke: var(--light-blue);
  }

  circle:last-of-type {
    stroke: var(--dark-blue);
    stroke-dasharray: ${(props) => props.dashArray};
    stroke-dashoffset: ${(props) => props.dashOffset};
  }
`;
