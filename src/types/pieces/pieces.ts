import { IPieceTypes } from '../IPieceTypes';

export abstract class Piece{
  readonly type: string;
  readonly isDark: boolean;
  readonly isDead: boolean;
  readonly svg: string;

  constructor (
    type: IPieceTypes,
  ){
    this.isDark = type.isDark;
    this.type = type.name;
    this.svg = type.svg;
    this.isDead = false;
  }

}