import darkKing from '../assets/pieces/dark/dark_King.svg'
import darkQueen from '../assets/pieces/dark/dark_Queen.svg'
import darkKnigth from '../assets/pieces/dark/dark_Knigth.svg'
import darkBishop from '../assets/pieces/dark/dark_Bishop.svg'
import darkRook from '../assets/pieces/dark/dark_Rook.svg'
import darkPawn from '../assets/pieces/dark/dark_Pawn.svg'
import ligthKing from '../assets/pieces/ligth/ligth_King.svg'
import ligthQueen from '../assets/pieces/ligth/ligth_Queen.svg'
import ligthKnigth from '../assets/pieces/ligth/ligth_Knigth.svg'
import ligthBishop from '../assets/pieces/ligth/ligth_Bishop.svg'
import ligthRook from '../assets/pieces/ligth/ligth_Rook.svg'
import ligthPawn from '../assets/pieces/ligth/ligth_Pawn.svg'

export const PieceTypes = {
  Dark: {
    ROOK: { isDark: true, name: 'R', svg: darkRook },
    KNIGTH: { isDark: true, name: 'K', svg: darkKnigth },
    BISHOP: { isDark: true, name: 'B', svg: darkBishop },
    QUEEN: { isDark: true, name: 'Q', svg: darkQueen },
    KING: { isDark: true, name: 'K', svg: darkKing },
    PAWN: { isDark: true, name: 'P', svg: darkPawn },
  },
  Ligth: {
    ROOK: { isDark: false, name: 'R', svg: ligthRook },
    KNIGTH: { isDark: false, name: 'K', svg: ligthKnigth },
    BISHOP: { isDark: false, name: 'B', svg: ligthBishop },
    QUEEN: { isDark: false, name: 'Q', svg: ligthQueen },
    KING: { isDark: false, name: 'K', svg: ligthKing },
    PAWN: { isDark: false, name: 'P', svg: ligthPawn },
  }
}