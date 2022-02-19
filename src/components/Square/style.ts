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

export const PieceDiv = styled.div`
  color: red;
  font-Size: 70px;
  margin: auto;
  text-align: center;
  padding: 10px;
`
