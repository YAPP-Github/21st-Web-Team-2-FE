import styled from '@emotion/styled';

export const Container = styled.div`
  display: grid;
  margin: 0 24px;

  grid-template-columns: repeat(12, 1fr);
  grid-auto-flow: column dense;
`;
