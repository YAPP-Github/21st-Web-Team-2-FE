import { css } from '@emotion/react';
import styled from '@emotion/styled';

import theme from '@src/styles/theme';

export const FabButton = styled.button<{ $visible: boolean }>`
  visibility: hidden;
  cursor: pointer;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: ${theme.color.Primary1};

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 28px;
  bottom: 28px;

  ${({ $visible }) =>
    $visible &&
    css`
      visibility: visible;
    `}

  &:hover {
    background: ${theme.color.Primary2};
  }
`;
