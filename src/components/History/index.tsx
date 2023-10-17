import { getBrightness } from 'src/utils/game';
import * as St from './styles';

interface IProps {
  color: IColor;
}

export default function History({ color }: IProps) {
  return (
    <St.History>
      {color.guessedColor === color.correctColor ? (
        <div>
          <St.ColorText
            color={getBrightness(color.correctColor)}
            background={color.correctColor}
            width="100%"
          >
            {color.correctColor}
          </St.ColorText>
        </div>
      ) : (
        <div>
          <St.ColorText
            color={getBrightness(color.guessedColor)}
            background={color.guessedColor}
            width="100%"
          >
            {color.guessedColor}
          </St.ColorText>
          <St.ColorText
            color={getBrightness(color.correctColor)}
            background={color.correctColor}
            width="100%"
          >
            {color.correctColor}
          </St.ColorText>
        </div>
      )}
      <p>{color.time}</p>
    </St.History>
  );
}
