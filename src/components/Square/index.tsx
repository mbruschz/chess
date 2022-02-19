import React from 'react'
import { Piece } from '../../types/pieces/pieces';
import { Wrapper, PieceDiv } from './style'
import bishop from '../../assets/pieces/dark/dark_bishop.svg'

interface SquareProps {
  id: string,
  size: number
  color: string,
  piece: Piece | undefined,
}

function Square ({ id, size, color, piece }:SquareProps): JSX.Element {

  // This function will be triggered when dropping
  const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    setContent(data);
  };

  // This makes the third box become droppable
  const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  
  return (
    <Wrapper 
      id={`square${id}`} 
      color={color}
      size={size} 
    >
      <PieceDiv src={piece?.svg} size={size} />
    </Wrapper>
  )
}

export default Square;