import React, { useEffect, useState } from 'react'
import { IColors } from '../../types/IColors';
import { IPosition } from '../../types/IPosition';
import { Piece } from '../../types/pieces/pieces';
import Square from '../Square';
import { Wrapper } from './style';

interface LineProps {
  line: number,
  squareSize: number,
  colors: IColors,
  board: Array<Piece | undefined>,
  onMovePiece: (pIni: IPosition, pDest: IPosition) => void,
}
function Line ({ line, squareSize, colors, board, onMovePiece }: LineProps) {

  const Squares = () => {
    console.log('render squares')
    return (
      board.map((p, i) => {
        return (
          <Square 
            key={line.toString()+i.toString()}
            line={line}
            column={i}
            size={ squareSize }
            color={(line + i) % 2 === 0 ? colors.lightColor : colors.darkColor}
            piece={p}
            onMovePiece={onMovePiece}
          />
        )
        })
    )
  }

  return (
    <Wrapper 
      id={`line${line.toString()}`}
    >
      {Squares()}
    </Wrapper>
  )
}

export default Line;