import styled from '@emotion/styled';

import theme from '@src/styles/theme';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 519px;
  width: 562px;
  background-color: ${theme.color.G2};
  padding: 24px;
  border-radius: 8px;
`;

export const Title = styled.p`
  margin-bottom: 20px;
  color: ${theme.color.Primary1};
  font-family: ${theme.fontFamily.english};
  font-size: 28px;
  text-align: center;
`;

export const Summary = styled.p`
  color: ${theme.color.G8};
  font-size: ${theme.textSize.B1};
  line-height: ${theme.lineHeight.B};
`;

export const GoogleLogin = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 260px;
  margin-top: 50px;
  margin-bottom: 16px;
  padding: 2px 6px;
  border-radius: 4px;
  background: ${theme.color.G8};
  gap: 10px;
  font-size: ${theme.textSize.B2};
  line-height: ${theme.lineHeight.B};
  color: ${theme.color.G1};
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: ${theme.color.G1};
  }
`;

export const Terms = styled.p`
  font-size: ${theme.textSize.B4};
  line-height: ${theme.lineHeight.B};
  text-align: center;
  color: ${theme.color.G7};

  a {
    text-decoration: underline;
    font-weight: bolder;
  }
`;
