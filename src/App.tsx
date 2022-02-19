import Board from './components/Board';
import { Game } from './types/game';

function App() {
  const game = new Game();
  
  return (
    <Board 
      squareSize={100}
      game={game}
    />
  )
}

export default App
