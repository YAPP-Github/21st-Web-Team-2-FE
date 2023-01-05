import Link from 'next/link';
import { FC } from 'react';

import Icon from '@src/components/common/Icon';

import * as S from './Header.style';

const Header: FC = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContents>
        <Link href="/">
          <S.LogoIcon name="Logo" width="189px" height="35px" />
        </Link>
        <S.Menus>
          <S.Menu>
            <Icon name="Search" size={35} />
          </S.Menu>
          <S.Menu>로그인</S.Menu>
        </S.Menus>
      </S.HeaderContents>
    </S.HeaderWrapper>
  );
};

export default Header;
