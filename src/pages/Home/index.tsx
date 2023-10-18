import { useGame } from 'src/context/gameContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Name from '../../images/name.png';
import Logo from '../../images/Logo.png';
import * as St from './styles';

export default function Home() {
  const { store, actions } = useGame();

  const [playerName, setPlayerName] = useState<string>(
    store.player.username ?? '',
  );
  const navigate = useNavigate();

  const ranking = store.ranking
    .sort((a, b) => {
      return a.highscore > b.highscore ? -1 : a.highscore < b.highscore ? 1 : 0;
    })
    .map((player, index) => {
      if (index < 10) {
        return (
          <St.Positions key={index}>
            <p>{index + 1}º</p>
            <p>{player.username}</p>
            <p>{player.highscore}</p>
          </St.Positions>
        );
      }
    });

  const startGame = () => {
    if (playerName !== store.player.username) {
      actions.setPlayer({ ...store.player, username: playerName });

      const newPlayer = {
        username: playerName,
        highscore: 0,
      };

      actions.setRanking([...store.ranking, newPlayer]);
    }
    navigate('/jogo');
  };

  return (
    <St.Container>
      <St.Start>
        <St.Name src={Name} alt="Game name" />
        <div>
          <p>Jogador:</p>
          <input
            value={playerName}
            onChange={(ev) => setPlayerName(ev.target.value)}
            type="text"
            placeholder="Digite seu nome"
          />
        </div>
        <button disabled={!playerName} onClick={startGame}>
          Iniciar
        </button>
      </St.Start>
      <St.Logo src={Logo} alt="Logo" />
      <St.Ranking>
        <p>HALL DA FAMA</p>
        <p>Pontos</p>
        <div>{ranking}</div>
      </St.Ranking>
    </St.Container>
  );
}
