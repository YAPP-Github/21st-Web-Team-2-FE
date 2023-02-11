import Link from 'next/link';
import { FC, useState } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';

import Icon from '@src/components/common/Icon';
import UserInfo from '@src/components/common/UserInfo';
import useMember from '@src/queires/useMember';
import $userSession from '@src/recoil/userSession';

import * as S from './Header.style';
import UserMenu from './UserMenu';

const Header: FC = () => {
  const userSession = useRecoilValue($userSession);
  const { data: member } = useMember(userSession?.accessToken);
  const resetUser = useResetRecoilState($userSession);
  const [viewUserMenu, setViewUserMenu] = useState(false);

  const handleLogout = () => {
    resetUser();
    setViewUserMenu(false);
  };

  // TODO-GYU: backend 와 논의 후 user 정보를 어떻게 받아올지 처리
  return (
    <S.HeaderWrapper>
      <S.HeaderContents>
        <Link href="/">
          <S.LogoIcon name="Logo" width="189px" height="35px" />
        </Link>
        <S.Menus>
          <S.Menu>
            <Icon name="Search" size={30} />
          </S.Menu>
          {member ? (
            <S.UserInfoWrapper onClick={() => setViewUserMenu((prev) => !prev)}>
              <UserInfo type="simple" member={member} />
            </S.UserInfoWrapper>
          ) : (
            <Link href="/login">
              <S.Menu>로그인</S.Menu>
            </Link>
          )}
        </S.Menus>
        {member && viewUserMenu && (
          <S.UserMenuWrapper>
            <UserMenu member={member} onLogout={handleLogout} />
          </S.UserMenuWrapper>
        )}
      </S.HeaderContents>
    </S.HeaderWrapper>
  );
};

export default Header;
