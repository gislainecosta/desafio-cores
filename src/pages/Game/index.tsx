import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from 'src/contexts/gameContext';
import Name from '../../images/name2.png';
import RestartImg from '../../images/restart.png';
import Clear from '../../images/clear.png';
import Paint from '../../images/round.png';
import Crono from '../../images/timer.png';
import Back from '../../images/back.png';
import History from '../../components/History';
import * as St from './styles';

export default function Game() {
  const navigate = useNavigate();
  const { store } = useGame();
  const [correctColor, setCorrectColor] = useState<string>('');
  const [colors, setColors] = useState<string[]>([]);
  const [generalTimer, setGeneralTimer] = useState<number>(30);
  //const [partialTimer, setPartialTimer] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const player = store.player;

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

  const history = player.colors.map((data, index) => (
    <History key={index} color={data} />
  ));

  const clear = () => {
    setColors([]);
    setCorrectColor('');
    setGeneralTimer(30);
    setScore(0);
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

    if (generalTimer === 0) clear();
  }, [generalTimer]);

  useEffect(() => {
    if (colors.length === 0) {
      generateRandomColor();
      setGeneralTimer(30);
      setScore(0);
    }
  }, [colors]);

  const checkAnswer = (answer: string) => {
    if (answer === correctColor) {
      setScore(score + 5);
    } else {
      setScore(score - 1 < 0 ? 0 : score - 1);
    }
    if (generalTimer !== 0) {
      generateRandomColor();
    }
  };

  return (
    <St.Container>
      <St.ColorsHistory>
        <h3>HISTÓRICO DE RODADAS</h3>
        <header>
          <p>Sua Resposta</p>
          <p>Resposta correta</p>
          <p>Tempo</p>
        </header>
        <main>{history}</main>
      </St.ColorsHistory>
      <St.Game>
        <St.Title>
          <St.Name src={Name} alt="Game name" />
        </St.Title>
        <St.CronoImg>
          <img src={Crono} alt="cronômetro" />
          <p>Tempo</p>
          <p>{generalTimer}</p>
        </St.CronoImg>
        <St.Restart>
          <img onClick={clear} src={RestartImg} alt="restart" />
          <button onClick={clear}>Restart</button>
        </St.Restart>
        <St.Score>
          <section>
            <p>Máxima:</p>
            <p>{player.highscore}</p>
            <p>Atual:</p>
            <p>{score}</p>
          </section>
          <p>Pontuação</p>
        </St.Score>
        <St.Color background={correctColor}>
          <div>
            <img src={Paint} alt="paint" />
          </div>
        </St.Color>
        <button onClick={() => checkAnswer(colors[0])}>{colors[0]}</button>
        <button onClick={() => checkAnswer(colors[1])}>{colors[1]}</button>
        <button onClick={() => checkAnswer(colors[2])}>{colors[2]}</button>
      </St.Game>
      <St.Actions>
        <section>
          <img onClick={() => navigate('/')} src={Back} alt="Página Inicial" />
          <button onClick={() => navigate('/')}>Início</button>
        </section>
        <section>
          <img onClick={clear} src={Clear} alt="Página Inicial" />
          <button onClick={clear}>Limpar Dados</button>
        </section>
      </St.Actions>
    </St.Container>
  );
}
