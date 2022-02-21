import React, { useState } from 'react'
import { IPosition } from '../../types/IPosition';
import { Piece } from '../../types/pieces/pieces';
import { Wrapper, PieceDiv } from './style'

interface SquareProps {
  line: number,
  column: number,
  size: number
  color: string,
  piece: Piece | undefined,
  onMovePiece: (pIni: IPosition, pDest: IPosition) => void,
}

function Square ({ line, column, size, color, piece, onMovePiece }:SquareProps): JSX.Element {

  // This function will be triggered when you start dragging
  const dragStartHandler = (
    event: React.DragEvent<HTMLDivElement>,
  ) => {
    console.log('dragStartHandler')
    event.dataTransfer.setData('text', JSON.stringify(event.target.id));
  };

  // This function will be triggered when dropping
  const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const pIni = JSON.parse(data).toString().split('-');
    const pDest = event.target.id.toString().split('-');
    onMovePiece({line: pIni[0], col: pIni[1]},{line: pDest[0], col: pDest[1]})
  };

  // This makes the third box become droppable
  const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const drawPiece = () => {
    if (piece) 
      return (
        <Wrapper 
          color={color}
          size={size} 
          onDragStart={(event) => dragStartHandler(event)}
          draggable={true}
          onDragOver={allowDrop} 
          onDrop={dropHandler}
        >
          <PieceDiv id={`${line}-${column}`} src={piece?.svg} size={size} />
        </Wrapper>
      )
    return (
      <Wrapper 
        color={color}
        size={size} 
        draggable={false}
        onDragOver={allowDrop} 
        onDrop={dropHandler}
        onMouseDown={(e) => e.preventDefault ? e.preventDefault() : false}
      > 
        <div id={`${line}-${column}`} style={{height: `${size}px`, width: `${size}px`}}/>
      </Wrapper>
    )
  }

  return (
    drawPiece()
  )
}

export default Square;