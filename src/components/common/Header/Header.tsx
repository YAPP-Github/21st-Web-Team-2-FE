import Link from 'next/link';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';

import DefaultImage from '@src/assets/user-default.png';
import Icon from '@src/components/common/Icon';
import $userSession from '@src/recoil/userSession';

import * as S from './Header.style';

const Header: FC = () => {
  const userSession = useRecoilValue($userSession);

  const isLogin = !!userSession;

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
          {isLogin ? (
            <S.UserInfo>
              <S.Profile src={DefaultImage} alt={'name'} width={28} height={28} />
              닉네임
            </S.UserInfo>
          ) : (
            <Link href="/login">
              <S.Menu>로그인</S.Menu>
            </Link>
          )}
        </S.Menus>
      </S.HeaderContents>
    </S.HeaderWrapper>
  );
};

export default Header;
