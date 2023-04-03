import styled, { keyframes } from 'styled-components';
import { MdKeyboardArrowUp } from 'react-icons/md';

export type IArrowProps = {
  arrowDirection: 'arrowUp' | 'arrowDown';
};

const ArrowUpAnimation = keyframes`
  from{
    transform:translateY(10px);
    opacity:0
  }
  to{
    transform:translateY(-10px)
  }
`;

const ArrowDownAnimation= keyframes` 
  from{
    transform:translateY(-10px);
    opacity:0
  }
  to{
    transform:translateY(10px)
  }
`;

export const Container = styled.div`
  position: relative;
  height: 42px;
`;

export const Icon = styled(MdKeyboardArrowUp)<IArrowProps>`
  color: white;
  height: 42px;
  size:42;
  animation: ${({ arrowDirection }) => {
    return arrowDirection === 'arrowUp' ?
      `${ArrowUpAnimation} 1.3s ease-in-out infinite` :
      `${ArrowDownAnimation} 1.3s ease-in-out infinite`;
  }};
  transform: ${({ arrowDirection }) => {
    return arrowDirection === 'arrowUp' ? 'rotate(0deg)' : 'rotate(180deg)';
  }};
`;  