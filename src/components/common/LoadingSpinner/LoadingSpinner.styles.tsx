import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
  overflow: auto;
  outline: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div<{ $size: number; $color: string }>`
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  border: 5px solid gray;
  border-top: 5px solid ${({ $color }) => $color};
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
`;
