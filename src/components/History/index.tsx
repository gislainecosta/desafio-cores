import { getBrightness } from 'src/utils/game';
import Check from 'src/images/check.svg';
import Error from 'src/images/error.svg';
import * as St from './styles';

interface IProps {
  color: IColor;
}

export default function History({ color }: IProps) {
  const isCorrect = color.guessedColor === color.correctColor;

  return (
    <St.History>
      {isCorrect ? (
        <section>
          <St.ColorText
            color={getBrightness(color.correctColor)}
            background={color.correctColor}
            width="16rem"
          >
            {color.correctColor}
          </St.ColorText>
        </section>
      ) : (
        <section>
          <St.ColorText
            color={getBrightness(color.guessedColor)}
            background={color.guessedColor}
            border={color.guessedColor ? '1px solid var(--white)' : 'none'}
            width="7rem"
          >
            {color.guessedColor}
          </St.ColorText>
          <St.ColorText
            color={getBrightness(color.correctColor)}
            background={color.correctColor}
            width="7rem"
          >
            {color.correctColor}
          </St.ColorText>
        </section>
      )}
      <section>
        <img src={isCorrect ? Check : Error} alt="response" />
        <p>
          {color.time < 10 && 0}
          {color.time}s
        </p>
      </section>
    </St.History>
  );
}
