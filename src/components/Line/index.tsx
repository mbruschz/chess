import React from 'react'
import { IColors } from '../../types/IColors';
import { Piece } from '../../types/pieces';
import Square from '../Square';
import { Wrapper } from './style';

interface LineProps {
  id: number,
  squareSize: number,
  columns: number,
  colors: IColors,
  pieces: Array<Piece | undefined>,
}
function Line ({ id, squareSize, columns, colors, pieces }: LineProps) {
  const Squares = [];

  for (const x of Array(columns).keys()){
    const isLightColor: boolean = (id + x) % 2 === 0;

    Squares.push(
      <Square 
        key={id.toString()+x.toString()}
        id={id.toString()+x.toString()}
        size={ squareSize }
        color={isLightColor ? colors.lightColor : colors.darkColor}
        piece={pieces[x]}
      />
    )
  } 

  return (
    <Wrapper 
      id={`line${id.toString()}`}
    >
      {Squares}
    </Wrapper>
  )
}

export default Line;