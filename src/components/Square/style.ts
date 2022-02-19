import styled from 'styled-components'

interface squareProps {
  size: number,
  color: string,
}
export const Wrapper = styled.div<squareProps>`
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  background: ${(props) => props.color};
`;

interface pieceProps {
  size: number,
}
export const PieceDiv = styled.img<pieceProps>`
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  color: red;
  font-Size: 70px;
  margin: auto;
  text-align: center;
`
