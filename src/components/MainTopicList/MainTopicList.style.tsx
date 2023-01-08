import styled from '@emotion/styled';

import theme from '@src/styles/theme';

export const MainTop = styled.div`
  margin-bottom: 24px;
  height: 62px;

  color: ${theme.color.G8};
`;

export const Welcome = styled.div`
  font-size: 28px;
  line-height: 34px;
`;

export const SubText = styled.div`
  font-size: ${theme.textSize.B1};
  line-height: ${theme.lineHeight.B};
`;

export const TopicsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 80px;
`;
