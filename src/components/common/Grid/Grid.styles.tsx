import styled from '@emotion/styled';

interface ContainerProps {
  $column: number;
}

export const Container = styled.div<ContainerProps>`
  grid-column: auto / span ${({ $column }) => $column || 1};
`;
