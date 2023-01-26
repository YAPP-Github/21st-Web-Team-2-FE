import styled from '@emotion/styled';

import Icon from '@src/components/common/Icon';
import theme from '@src/styles/theme';

export const Container = styled.div`
  width: 24px;
  height: 24px;

  position: relative;
`;

export const Share = styled(Icon)`
  cursor: pointer;
`;

export const Toast = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;

  position: absolute;
  width: 200px;
  height: 48px;
  top: calc(100% + 8px);
  right: 0;

  background-color: ${theme.color.G6};
  border-radius: 8px;

  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.textSize.T3};
  line-height: ${theme.lineHeight.B};
`;
