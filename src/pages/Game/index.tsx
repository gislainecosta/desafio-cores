import { useEffect, useState } from 'react';
import Name from '../../images/name2.png';
import * as St from './styles';

export default function Game() {
  const [correctColor, setCorrectColor] = useState<string>('');
  const [colors, setColors] = useState<string[]>([]);
  const [generalTimer, setGeneralTimer] = useState<number>(30);
  //const [partialTimer, setPartialTimer] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  //const [highScore, setHighScore] = useState<number>(0);

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    const randomColors = [];

    for (let i = 0; i < 3; i++) {
      let color = '#';

      for (let j = 0; j < 6; j++) {
        color += letters[Math.floor(Math.random() * 16)];
      }

      randomColors.push(color);

      setColors(randomColors);
      setCorrectColor(randomColors[Math.floor(Math.random() * 3)]);
    }
  };

  useEffect(() => {
    if (generalTimer > 0) {
      const interval = setInterval(() => {
        setGeneralTimer(generalTimer - 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [generalTimer]);

  useEffect(() => {
    if (colors.length === 0) {
      generateRandomColor();
      setGeneralTimer(30);
      setScore(0);
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
        <section>{generalTimer}</section>
        <section>
          <button onClick={() => setColors([])}>Restart</button>
        </section>
        <section>
          <p>Pontuação máxima</p>
          <p>Pontos {score}</p>
        </section>
        <St.Color>{correctColor}</St.Color>
        <section>{colors[0]}</section>
        <section>{colors[1]}</section>
        <section>{colors[2]}</section>
      </St.Game>
    </St.Container>
  );
}
