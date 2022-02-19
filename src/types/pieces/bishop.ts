import { IPosition } from '../IPosition';
import { Piece } from './pieces';
import { PieceTypes } from '../../constants/PieceTypes';


export class Bishop extends Piece{
  constructor(isDark: boolean){
    super(isDark ? PieceTypes.Dark.BISHOP : PieceTypes.Ligth.BISHOP)
  }    

}