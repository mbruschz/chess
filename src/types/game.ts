import { Bishop } from './pieces/bishop';
import { King } from './pieces/king';
import { Knigth } from './pieces/knigth';
import { Pawn } from './pieces/pawn';
import { Piece } from './pieces/pieces';
import { Queen } from './pieces/queen';
import { Rook } from './pieces/rook';


export class Game {
  board: Array<Piece | undefined>[] = [];

  constructor(){
    this.initializeBoard();
    this.createTopPieceSet(true);
    this.createBottomPieceSet(false);
  }

  private initializeBoard(){
    for(let i = 0; i < 8; i++){
      this.board[i] = [];
      for(let j = 0; j < 8; j++){
        this.board[i][j] = undefined;
      }
    }
  }

  createTopPieceSet(isDark: boolean) {
    this.board[0][0] = new Rook(isDark);
    this.board[0][7] = new Rook(isDark);
    this.board[0][1] = new Knigth(isDark);
    this.board[0][6] = new Knigth(isDark);
    this.board[0][2] = new Bishop(isDark);
    this.board[0][5] = new Bishop(isDark);
    this.board[0][3] = new Queen(isDark);
    this.board[0][4] = new King(isDark);
    
    for (let i=0; i<8; i++){
      this.board[1][i] = new Pawn(isDark);
    }
  }

  createBottomPieceSet(isDark: boolean) {
    this.board[7][0] = new Rook(isDark);
    this.board[7][7] = new Rook(isDark);
    this.board[7][1] = new Knigth(isDark);
    this.board[7][6] = new Knigth(isDark);
    this.board[7][2] = new Bishop(isDark);
    this.board[7][5] = new Bishop(isDark);
    this.board[7][3] = new Queen(isDark);
    this.board[7][4] = new King(isDark);
    
    for (let i=0; i<8; i++){
      this.board[6][i] = new Pawn(isDark);
    }
  }
}