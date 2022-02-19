import { IPosition } from '../IPosition';

export abstract class Piece{
  readonly type: string;
  readonly isDark: boolean;
  readonly isDead: boolean;

  constructor (
    isDark: boolean,
    type: string,
  ){
    this.isDark = isDark;
    this.type = type;
    this.isDead = false;
  }

}