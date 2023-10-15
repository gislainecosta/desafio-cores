import { useGame } from 'src/contexts/gameContext';
import { useNavigate } from 'react-router-dom';
import Name from '../../images/name.png';
import Logo from '../../images/Logo.png';
import * as St from './styles';

export default function Home() {
  const { store } = useGame();
  const navigate = useNavigate();

  const ranking = store.ranking
    .sort((a, b) => {
      return a.highscore > b.highscore ? -1 : a.highscore < b.highscore ? 1 : 0;
    })
    .map((player, index) => {
      if (index < 10) {
        return (
          <St.Positions key={index}>
            <p>{index + 1}</p>
            <p>{player.username}</p>
            <p>{player.highscore}</p>
          </St.Positions>
        );
      }
    });

  return (
    <St.Container>
      <section>
        <St.Name src={Name} alt="Game name" />
        <button onClick={() => navigate('/jogo')}>Iniciar</button>
        <button onClick={() => navigate('/tutorial')}>Tutorial</button>
      </section>
      <St.Logo src={Logo} alt="Logo" />
      <St.Ranking>
        <p>HALL DA FAMA</p>
        <p>Pontos</p>
        <div>{ranking}</div>
      </St.Ranking>
    </St.Container>
  );
}
