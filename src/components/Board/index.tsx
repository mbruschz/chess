import React, { useEffect, useMemo, useState } from 'react';
import { Game } from '../../types/game';
import { IColors } from '../../types/IColors';
import { IPosition } from '../../types/IPosition';
import { Rook } from '../../types/pieces/rook';
import Line from '../Line';
import { Wrapper } from './style';


interface BoardProps{
  lines?: number,
  columns?: number,
  squareSize?: number,
  colors?: IColors,
  game: Game;
}

function Board ({
    lines=8, 
    columns=8, 
    squareSize=100, 
    colors = {lightColor: '#FFFFFF', darkColor: '#5A5A5A'},
    game,
}:BoardProps) {
  
  const [gameBoard, setGameBoard] = useState(game.board);

  const onMovePiece = (pIni: IPosition, pDest: IPosition) => {
    console.log('move Piece', pIni, pDest );
    if (JSON.stringify(pIni) !== JSON.stringify(pDest)) {
      let gb = gameBoard.map((x) => x);
      gb[pDest.line][pDest.col] = gb[pIni.line][pIni.col];
      gb[pIni.line][pIni.col] = undefined;
      setGameBoard(gb);
    }
  }

  const Lines = () => {
    console.log('render Lines')
    return (
      gameBoard.map((l, i) => {
        return (
          <Line
            key={i}
            line={i}
            squareSize={squareSize}
            colors={colors}
            board={gameBoard[i]}
            onMovePiece={onMovePiece}
          />
        )
        })
    )
  }
  
  return (
    <Wrapper 
      id='board'
      heigth={lines * squareSize}
      width={columns * squareSize}

    >
      {Lines()}        
    </Wrapper>
  )
}
export default Board;