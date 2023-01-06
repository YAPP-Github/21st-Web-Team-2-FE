import styled from '@emotion/styled';

import theme from '@src/styles/theme';

export const SelectOption = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 16px;
  gap: 4px;

  width: 386px;
  height: 68px;

  background-color: ${theme.color.G5};
  border-radius: 4px;

  cursor: pointer;

  &:hover {
    background-color: ${theme.color.G6};
  }
`;
