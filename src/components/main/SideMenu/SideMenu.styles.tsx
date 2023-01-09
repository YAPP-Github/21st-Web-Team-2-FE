import styled from '@emotion/styled';

import theme from '@src/styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  width: 227px;
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 20px;
  gap: 10px;
`;

export const TagTitle = styled.div`
  padding: 15px 4px;

  font-size: ${theme.textSize.T1};
  font-weight: ${theme.fontWeight.bold};
  line-height: ${theme.lineHeight.H};
`;
