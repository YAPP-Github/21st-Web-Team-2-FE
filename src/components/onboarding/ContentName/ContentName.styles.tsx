import styled from '@emotion/styled';

import theme from '@src/styles/theme';

export const Wrapper = styled.div`
  width: 280px;
  height: 247px;
  background-color: ${theme.color.G2};
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  color: ${theme.color.Primary1};
  font-size: 28px;
  line-height: ${theme.lineHeight.B};
  text-align: center;
  font-family: ${theme.fontFamily.english};
`;

export const SubTitle = styled.p`
  margin-top: 20px;
  font-size: ${theme.textSize.B1};
  line-height: ${theme.lineHeight.B};
  text-align: center;
  color: ${theme.color.G8};
`;

export const InputWrapper = styled.div`
  width: 280px;
  height: 56px;
  margin-top: 16px;
  margin-bottom: 50px;
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
