import styled from '@emotion/styled';

import Icon from '@src/components/common/Icon';
import theme from '@src/styles/theme';

export const Wrapper = styled.div`
  width: 280px;
  background-color: ${theme.color.G2};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

export const Button = styled.button`
  margin-top: 50px;
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
