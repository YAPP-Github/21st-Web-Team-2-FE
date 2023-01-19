import { css } from '@emotion/react';
import styled from '@emotion/styled';

import theme from '@src/styles/theme';

export const Wrapper = styled.div<{ $isTyped: boolean }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${theme.color.G3};
  border: 1px solid ${theme.color.G5};
  border-radius: 8px;
  &:focus-within {
    border-color: ${theme.color.G6};
  }
  ${({ $isTyped }) =>
    $isTyped &&
    css`
      border-color: ${theme.color.G6};
    `}
`;

export const TextAreaWrapper = styled.div`
  padding: 20px;
`;

export const TextArea = styled.textarea`
  outline: none;
  background-color: transparent;
  width: 100%;
  resize: none;
  border: none;
  font-size: ${theme.textSize.B2};
  line-height: ${theme.lineHeight.B};
  font-family: ${theme.fontFamily.basic};
  caret-color: ${theme.color.Primary1};
  color: ${theme.color.G8};
  &::placeholder {
    color: ${theme.color.G6};
  }
  &:focus {
    outline: none;
  }
`;

export const TextLengthWrpper = styled.div`
  padding: 12px 20px;
  display: flex;
  justify-content: flex-end;
  font-size: ${theme.textSize.B3};
  line-height: ${theme.lineHeight.B};
`;

export const TextLength = styled.span`
  color: ${theme.color.G6};
`;

export const CurrentText = styled.span`
  color: ${theme.color.G7};
`;
