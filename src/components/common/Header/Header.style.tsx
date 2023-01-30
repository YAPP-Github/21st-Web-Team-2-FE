import styled from '@emotion/styled';

import Icon from '@src/components/common/Icon';
import theme from '@src/styles/theme';

export const HeaderWrapper = styled.header`
  position: sticky;
  left: 0px;
  top: 0px;
  width: 100%;
  z-index: 1;

  height: 5rem;
  background-color: ${theme.color.G1};
  border-bottom: 1px solid ${theme.color.Primary1};
`;

export const HeaderContents = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  padding: 24px;
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

  text-decoration: none;
  color: ${theme.color.Primary1};
`;

export const UserInfoWrapper = styled.div`
  cursor: pointer;
`;

export const UserMenuWrapper = styled.div`
  position: absolute;
  top: 70px;
  right: 0;
`;
