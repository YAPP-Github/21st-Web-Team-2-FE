import styled from '@emotion/styled';

import Icon from '@src/components/common/Icon';

export const HeaderWrapper = styled.header`
  width: 100vw;
  height: 5rem;
  color: #d2fa64;
  background-color: #101012;
  border-bottom: 1px solid #d2fa64;
`;

export const HeaderContents = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 24px;
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
