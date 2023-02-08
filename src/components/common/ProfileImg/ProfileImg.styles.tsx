import styled from '@emotion/styled';

interface ContainerProps {
  $size?: number;
}

export const Container = styled.div<ContainerProps>`
  width: ${({ $size }) => $size || 28}px;
  height: ${({ $size }) => $size || 28}px;

  border-radius: 50%;
  overflow: hidden;
`;
