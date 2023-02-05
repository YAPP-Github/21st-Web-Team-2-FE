import styled from '@emotion/styled';

import theme from '@src/styles/theme';

export const Wrapper = styled.div`
  width: 336px;
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
  margin-bottom: 16px;
`;

export const YearSelectorWrapper = styled.div`
  height: 58px;
  margin-bottom: 50px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
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
