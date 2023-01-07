import styled from '@emotion/styled';

import Icon from '@src/components/common/Icon';
import theme from '@src/styles/theme';

export const HeaderWrapper = styled.header`
  width: 100vw;
  height: 5rem;
  color: ${theme.color.Primary1};
  background-color: ${theme.color.G1};
  border-bottom: 1px solid ${theme.color.Primary1};
`;

export const HeaderContents = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`;

export const LogoIcon = styled(Icon)`
  cursor: pointer;
`;

export const Menus = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Menu = styled.li`
  cursor: pointer;
  display: flex;

  font-weight: 700;
  font-size: 15px;
  line-height: 150%;
`;
