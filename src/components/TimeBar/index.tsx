import * as St from './styles';

interface Iprops {
  percentage: number;
}

export default function TimeBar({ percentage }: Iprops) {
  const radius = 134;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <St.Container
      width="18.5rem"
      height="18.5rem"
      viewBox="0 0 18.5rem 18.5rem"
      percentage={percentage}
      dashArray={dashArray}
      dashOffset={dashOffset}
    >
      <circle cx="9.25rem" cy="9.25rem" strokeWidth="1.8rem" r={radius} />
      <circle
        cx="9.25rem"
        cy="9.25rem"
        strokeWidth="1.8rem"
        r={radius}
        transform="rotate(272 148 148)"
      ></circle>
    </St.Container>
  );
}
