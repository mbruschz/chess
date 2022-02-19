import { IPosition } from '../IPosition';
import { Piece } from './pieces';
import { PieceTypes } from '../../constants/PieceTypes';


export class Knigth extends Piece{
  constructor(isDark: boolean){
    super(isDark ? PieceTypes.Dark.KNIGTH : PieceTypes.Ligth.KNIGTH)
  }    

}