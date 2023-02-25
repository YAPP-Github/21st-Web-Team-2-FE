import styled from '@emotion/styled';

import theme from '@src/styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  margin-top: 8px;
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;

  ${theme.font.B3}
  color: ${theme.color.G8};
`;

export const Sub = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  ${theme.font.B4}
  color: ${theme.color.G7};
`;

export const SubItem = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;
