import React from 'react'
import { Piece } from '../../types/pieces';
import { Wrapper, PieceDiv } from './style'

interface SquareProps {
  id: string,
  size: number
  color: string,
  piece: Piece | undefined,
}

function Square ({ id, size, color, piece }:SquareProps): JSX.Element {

  return (
    <Wrapper 
      id={`square${id}`} 
      color={color}
      size={size} 
    >
      <PieceDiv>
        {piece?.type}
      </PieceDiv>
    </Wrapper>
  )
}

export default Square;