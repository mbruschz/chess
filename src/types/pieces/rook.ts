import { IPosition } from '../IPosition';
import { Piece } from './pieces';
import { PieceTypes } from '../../constants/PieceTypes';


export class Rook extends Piece{
  constructor(isDark: boolean){
    super(isDark ? PieceTypes.Dark.ROOK : PieceTypes.Ligth.ROOK)
  }    

}