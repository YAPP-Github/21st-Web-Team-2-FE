import { css } from '@emotion/react';
import styled from '@emotion/styled';

import theme from '@src/styles/theme';

interface ContainerProps {
  $selected: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  padding: 0 24px;
  gap: 4px;

  width: 242px;
  height: 53px;

  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.textSize.T1};
  line-height: ${theme.lineHeight.H};
  border-radius: 8px;

  cursor: pointer;

  ${({ $selected }) =>
    $selected
      ? css`
          background: ${theme.color.G3};
          color: ${theme.color.Primary1};
        `
      : css`
          background: ${theme.color.G1};

          &:hover {
            padding: 0 32px;
            background: ${theme.color.G3};
          }
        `}
`;
