import { css } from '@emotion/react';
import styled from '@emotion/styled';

import theme from '@src/styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 227px;
  height: 182px;
  box-shadow: 0px 4px 30px 5px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
`;

export const UserItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  height: 76px;

  border-radius: 8px 8px 0 0;
  background: ${theme.color.G4};
  &:hover {
    background: ${theme.color.G5};
    cursor: pointer;
  }
`;

export const MenuItem = styled.div<{ $last?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  height: 53px;

  background: ${theme.color.G4};
  &:hover {
    background: ${theme.color.G5};
    cursor: pointer;
  }

  ${({ $last }) =>
    $last &&
    css`
      border-radius: 0 0 8px 8px;
    `}
`;
