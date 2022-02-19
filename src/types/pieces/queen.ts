import { IPosition } from '../IPosition';
import { Piece } from './pieces';
import { PieceTypes } from '../../constants/PieceTypes';


export class Queen extends Piece{
  constructor(isDark: boolean){
    super(isDark, PieceTypes.QUEEN)
  }    

}