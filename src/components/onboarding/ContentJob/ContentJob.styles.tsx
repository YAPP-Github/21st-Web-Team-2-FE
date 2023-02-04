import { css } from '@emotion/react';
import styled from '@emotion/styled';

import theme from '@src/styles/theme';

export const Wrapper = styled.div`
  width: 392px;
  background-color: ${theme.color.G2};
`;

export const Title = styled.p`
  color: ${theme.color.Primary1};
  font-size: 28px;
  line-height: ${theme.lineHeight.B};
  text-align: center;
  font-family: ${theme.fontFamily.english};
  margin-bottom: 20px;
`;

export const SubTitle = styled.p`
  font-size: ${theme.textSize.B1};
  line-height: ${theme.lineHeight.B};
  text-align: center;
  color: ${theme.color.G8};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  width: 392px;
  height: 58px;
  justify-content: center;
  margin: 16px 0;
`;

export const EtcWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 392px;
`;

export const InputWrapper = styled.div`
  height: 56px;
`;

export const SelectButton = styled.button<{ $selected?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 10px;
  padding: 15px 20px;
  border-radius: 8px;
  line-height: ${theme.lineHeight.B};

  background: ${theme.color.G4};
  font-size: ${theme.textSize.B1};
  color: ${theme.color.G8};

  &:hover {
    background: ${theme.color.G5};
  }

  ${({ $selected }) =>
    $selected &&
    css`
      border: 1px solid ${theme.color.Primary1};
      color: ${theme.color.Primary1};
      font-weight: ${theme.fontWeight.bold};
    `}
`;

export const Button = styled.button`
  width: 280px;
  height: 47px;
  background-color: ${theme.color.Primary1};
  border-radius: 5px;
  color: ${theme.color.G1};
  cursor: pointer;

  &:disabled {
    background-color: ${theme.color.G5};
    cursor: not-allowed;
  }
`;
