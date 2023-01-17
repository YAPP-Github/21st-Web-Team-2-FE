import { css } from '@emotion/react';
import styled from '@emotion/styled';

import theme from '@src/styles/theme';

export const Wrapper = styled.div<{ $error: boolean; $isTyped: boolean }>`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 4px;
  font-size: ${theme.textSize.B3};
  line-height: ${theme.lineHeight.B};

  padding: 8px 20px;
  background-color: ${theme.color.G3};
  border-radius: 8px;
  border: 1px solid ${({ $error }) => ($error ? theme.color.Secondary1 + '!important' : theme.color.G5)};
  &:focus-within {
    border-color: ${theme.color.G6};
  }
  ${({ $isTyped }) =>
    $isTyped &&
    css`
      border-color: ${theme.color.G6};
    `}
`;

export const Input = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  color: ${theme.color.G8};
  caret-color: ${theme.color.Primary1};
  font-size: ${theme.textSize.B2};
  line-height: ${theme.lineHeight.B};
  font-family: ${theme.fontFamily.basic};
  flex: 1;
  &::placeholder {
    color: ${theme.color.G6};
  }
`;

export const TextLength = styled.span`
  color: ${theme.color.G6};
`;

export const CurrentText = styled.span`
  color: ${theme.color.G7};
`;

export const ErrorMessage = styled.p`
  margin-top: 4px;
  font-size: ${theme.textSize.B3};
  line-height: ${theme.lineHeight.B};
  color: ${theme.color.Secondary1};
`;
