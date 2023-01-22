import React, { FC } from 'react';

import Icon from '@src/components/common/Icon';
import UserInfo from '@src/components/common/UserInfo';

import * as S from './UserMenu.styles';

const UserMenu: FC = () => {
  return (
    <S.Wrapper>
      <S.UserItem>
        <UserInfo type="full" />
        <Icon name="ArrowRight" size={24} />
      </S.UserItem>
      <S.MenuItem>문의하기</S.MenuItem>
      <S.MenuItem>로그아웃</S.MenuItem>
    </S.Wrapper>
  );
};

export default UserMenu;
