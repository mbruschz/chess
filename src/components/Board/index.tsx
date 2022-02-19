import React from 'react';
import { Game } from '../../types/game';
import { IColors } from '../../types/IColors';
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

  const Lines = [];
  for (const x of Array(lines).keys()){
    Lines.push(
      <Line
        key={x}
        id={x}
        squareSize={squareSize}
        columns={columns}
        colors={colors}
        pieces={game.board[x]}
      />
    )
  }
  
  

  return (
    <Wrapper 
      id='board'
      heigth={lines * squareSize}
      width={columns * squareSize}
    >
      {Lines}        
    </Wrapper>
  )
}
export default Board;