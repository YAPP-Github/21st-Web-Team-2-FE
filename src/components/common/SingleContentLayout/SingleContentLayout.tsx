import React, { FC, PropsWithChildren } from 'react';

import Header from '@src/components/common/Header';

import * as S from './SingleContentLayout.styles';

const ContentLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <S.Wrapper>{children}</S.Wrapper>
    </>
  );
};

export default ContentLayout;
