import Jogo from '../../images/paint.svg';
import * as St from './styles';

export default function Game() {
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
        <img src={Jogo} alt="avatar" />
      </St.Game>
    </St.Container>
  );
}
