import { useEffect, useState } from 'react';
import Name from '../../images/name2.png';
import * as St from './styles';

export default function Game() {
  const [correctColor, setCorrectColor] = useState<string>('');
  const [colors, setColors] = useState<string[]>([]);

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  };

  useEffect(() => {
    if (colors.length === 0) {
      const randomColors = [];

      for (let i = 0; i < 3; i++) {
        randomColors.push(generateRandomColor());
      }

      setColors(randomColors);
      setCorrectColor(randomColors[Math.floor(Math.random() * 3)]);
    }
  }, [colors]);

  return (
    <St.Container>
      <St.ColorsHistory>
        <h3>Histórico de rodadas</h3>
        <section>
          <header>
            <p>Sua Resposta</p>
            <p>Resposta correta</p>
            <p>Tempo</p>
          </header>
        </section>
      </St.ColorsHistory>
      <St.Game>
        <St.Title>
          <St.Name src={Name} alt="Game name" />
        </St.Title>
        <section>Timer</section>
        <section>
          <button onClick={() => setColors([])}>Restart</button>
        </section>
        <section>Points</section>
        <St.Color>{correctColor}</St.Color>
        <section>{colors[0]}</section>
        <section>{colors[1]}</section>
        <section>{colors[2]}</section>
      </St.Game>
    </St.Container>
  );
}
