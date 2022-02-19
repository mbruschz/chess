import styled from 'styled-components';

interface BorderProps {
  heigth: number,
  width: number,
}
export const Wrapper = styled.div<BorderProps>`
  height: ${(props) => props.heigth}px;
  width: ${(props) => props.heigth}px;
  border: double 5px black;
  margin: 50px auto;

`;
