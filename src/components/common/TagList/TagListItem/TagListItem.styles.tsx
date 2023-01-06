import { css } from '@emotion/react';
import styled from '@emotion/styled';

import theme from '@src/styles/theme';

export type TagType = 'delete';
interface ContainerProps {
  type?: TagType;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;

  width: fit-content;

  border: 1px solid ${theme.color.G5};
  border-radius: 100px;

  font-weight: ${theme.fontWeight.regular};
  font-size: ${theme.textSize.B3};
  line-height: ${theme.lineHeight.B};

  color: ${theme.color.G8};

  ${({ type }) =>
    type === 'delete' &&
    css`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 4px 8px 4px 12px;
      gap: 4px;

      border-radius: 100px;
    `}
`;
