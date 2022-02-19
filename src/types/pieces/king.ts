import { IPosition } from '../IPosition';
import { Piece } from './pieces';
import { PieceTypes } from '../../constants/PieceTypes';


export class King extends Piece{
  constructor(isDark: boolean){
    super(isDark ? PieceTypes.Dark.KING : PieceTypes.Ligth.KING)
  }    

}