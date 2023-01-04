import styled from '@emotion/styled';

import theme from '@src/styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;

  width: fit-content;

  border: 1px solid ${theme.color.G5};
  border-radius: 100px;

  font-weight: ${theme.fontWeight.regular};
  font-size: ${theme.textSize.B3};
  line-height: ${theme.lineHeight.B};

  color: ${theme.color.G8};
`;
