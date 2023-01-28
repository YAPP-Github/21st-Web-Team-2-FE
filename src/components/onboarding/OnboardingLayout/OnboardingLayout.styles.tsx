import styled from '@emotion/styled';

import theme from '@src/styles/theme';

export const Wrapper = styled.div`
  width: 562px;
  background-color: ${theme.color.G2};
  border-radius: 8px;
`;

export const Header = styled.div`
  width: 562px;
  height: 69px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 24px;
  background: ${theme.color.G2};
  color: ${theme.color.G8};
  font-size: ${theme.textSize.B2};
  line-height: ${theme.lineHeight.B};
  font-weight: ${theme.fontWeight.regular};
  border-radius: 8px 8px 0 0;
`;
export const LastCurrent = styled.span`
  color: ${theme.color.G6};
`;

export const Content = styled.div`
  height: 519px;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
