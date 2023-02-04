import React, { FC } from 'react';

import Icon from '@src/components/common/Icon';
import UserInfo from '@src/components/common/UserInfo';
import Member from '@src/types/Member';

import * as S from './UserMenu.styles';

interface Props {
  member: Member;
  onLogout: () => void;
}
const UserMenu: FC<Props> = (props) => {
  const { member, onLogout } = props;

  return (
    <S.Wrapper>
      <S.UserItem>
        <UserInfo member={member} />
        <Icon name="ArrowRight" size={24} />
      </S.UserItem>
      <S.MenuItem>문의하기</S.MenuItem>
      <S.MenuItem onClick={onLogout}>로그아웃</S.MenuItem>
    </S.Wrapper>
  );
};

export default UserMenu;
