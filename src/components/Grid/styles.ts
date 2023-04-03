import styled from 'styled-components';
import Link from 'next/link';

export const Triangle = styled.div`
  margin-left: 3rem;
`;

export const Options = styled.div`
  overflow: hidden;
  position: absolute;
  margin-left: 20.4rem;
  z-index: 12;
  top: 5rem;
  transition: filter 1s ease-in-out;

 
`;
export const triangleChild = styled(Link)`
  cursor: pointer;

  &:hover{
    filter: brightness(1.3);
    transform-origin: 32% 50%;
  }
` 

export const Container = styled.svg`
  margin-left: 12.2rem;
  z-index: 12;
`;

export const Row = styled.div`
  width: 500px;
  margin-left: 11.6rem;
  margin-top: 10.7rem;
  @media (max-width: 900px) {
    width: 300px;
  }

`;

export const Row2 = styled.div`
  width: 600px;
  margin-left: 8.5rem;
  margin-top: -2.3rem;
  margin-right: 0;

  @media (max-width: 900px) {
    width: 300px;
  }
`;

export const Row3 = styled.div`
  width: 600px;
  margin-left: 5.3rem;
  margin-top: -2.3rem;

  @media (max-width: 900px) {
    width: 300px;
  }
`;

export const SecondTriangle = styled.div`
  position: absolute;
  transform: scaleY(-1);
  z-index: 1;
  top: 0;
`;
