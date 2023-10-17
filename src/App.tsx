import styled from 'styled-components';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyle } from './globalStyle';
import Game from './pages/Game';
import Home from './pages/Home';
import { GameContextProvider } from './contexts/gameContext';

const ContainerApp = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

function App() {
  return (
    <GameContextProvider>
      <ContainerApp>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/jogo" element={<Game />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </ContainerApp>
    </GameContextProvider>
  );
}

export default App;
