import styled from '@emotion/styled';

import theme from '@src/styles/theme';

export const AddButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 20px 24px;
  gap: 8px;

  height: 72px;
  width: 100%;

  background: ${theme.color.G3};
  color: ${theme.color.Primary1};

  border: 1px solid ${theme.color.Primary1};
  border-radius: 8px;
`;
