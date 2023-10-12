import Name from '../../images/Name.png';
import Logo from '../../images/Logo.png';
import * as St from './styles';

function Home() {
  return (
    <St.HomeContainer>
      <section>
        <St.Name src={Name} alt="Game name" />
        <button>Iniciar</button>
        <button>Tutorial</button>
      </section>
      <section>
        <St.Logo src={Logo} alt="Logo" />
      </section>
      <section>
        <p style={{ textAlign: 'center' }}>Ranking</p>
      </section>
    </St.HomeContainer>
  );
}

export default Home;
