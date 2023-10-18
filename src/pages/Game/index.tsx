import { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from 'src/context/gameContext';
import useCountdown from 'src/hooks/useCountdown';
import TimeBar from 'src/components/TimeBar';
import Name from '../../images/name2.png';
import RestartImg from '../../images/restart.png';
import Clear from '../../images/clear.png';
import Check from '../../images/check_answer.svg';
import Error from '../../images/error_answer.svg';
import Back from '../../images/back.png';
import History from '../../components/History';
import * as St from './styles';

export default function Game() {
  const navigate = useNavigate();
  const [correctColor, setCorrectColor] = useState<string>('');
  const [colors, setColors] = useState<string[]>([]);
  const { secondsLeft: generalTime, start: generalStart } = useCountdown();
  const { secondsLeft: partialTime, start: partialStart } = useCountdown();
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [showAnswerIcon, setAnswerShowIcon] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const { store, actions } = useGame();
  const player = store.player;
  const ranking = store.ranking;

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
    setScore(0);
    generalStart(30);
    setButtonDisabled(false);
    partialStart(10);
  };

  const showIcon = () => {
    setAnswerShowIcon(true);
    setTimeout(() => {
      setAnswerShowIcon(false);
    }, 200);
  };

  useLayoutEffect(() => {
    generalStart(30);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveHistory = (answer: string | '') => {
    const newAnswer = {
      guessedColor: answer,
      correctColor,
      time: 10 - partialTime,
    };

    actions.setPlayer({
      ...player,
      colors: [newAnswer, ...player.colors],
    });
  };

  useEffect(() => {
    if (!player.username) navigate('/');
    if (partialTime === 0 && generalTime !== 0) {
      generateRandomColor();
      partialStart(10);
      setButtonDisabled(false);

      if (colors.length !== 0) {
        setIsCorrect(false);
        showIcon();
        setScore(score - 2);
        saveHistory('');
      }
    } else {
      if (generalTime === 0) {
        if (player.highscore < score) {
          actions.setPlayer({ ...player, highscore: score });

          const index = ranking.findIndex(
            (it) => it.username === player.username,
          );

          ranking[index].highscore = score;

          console.log({ ranking, index, score });
          console.log(ranking[index]);
        }
        setButtonDisabled(true);
      }
    }

    if (score < 0) setScore(0);
  }, [
    actions,
    colors.length,
    generalTime,
    partialStart,
    partialTime,
    player,
    ranking,
    score,
  ]);

  useEffect(() => {
    if (colors.length === 0) {
      generateRandomColor();
      setScore(0);
      generalStart(30);
    }
  }, [colors, generalStart]);

  const checkAnswer = (answer: string) => {
    if (answer === correctColor) {
      setScore(score + 5);
      setIsCorrect(true);
    } else {
      setScore(score - 1 < 0 ? 0 : score - 1);
      setIsCorrect(false);
    }

    saveHistory(answer);

    showIcon();

    if (generalTime !== 0) {
      generateRandomColor();
      partialStart(10);
    }
  };

  return (
    <St.Container>
      <St.ColorsHistory>
        <p>HISTÓRICO DE RODADAS</p>
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
          <div>
            <p>
              {generalTime < 10 && 0}
              {generalTime}
            </p>
          </div>
          <p>Tempo</p>
        </St.CronoImg>
        <St.Restart>
          <img onClick={clear} src={RestartImg} alt="restart" />
          <button onClick={clear}>Reiniciar</button>
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
          <TimeBar percentage={(generalTime / 30) * 100} />
          {showAnswerIcon && (
            <div>
              <img src={isCorrect ? Check : Error} alt="response" />
            </div>
          )}
          <div></div>
        </St.Color>
        <button
          disabled={buttonDisabled}
          onClick={() => checkAnswer(colors[0])}
        >
          {colors[0]}
        </button>
        <button
          disabled={buttonDisabled}
          onClick={() => checkAnswer(colors[1])}
        >
          {colors[1]}
        </button>
        <button
          disabled={buttonDisabled}
          onClick={() => checkAnswer(colors[2])}
        >
          {colors[2]}
        </button>
      </St.Game>
      <St.Actions>
        <p>Olá {player.username}!</p>
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
