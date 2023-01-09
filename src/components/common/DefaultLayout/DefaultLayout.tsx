import React, { ReactNode } from 'react';

import Grid from '@src/components/common/Grid';
import Header from '@src/components/common/Header';

import * as S from './DefaultLayout.styles';

interface DefaultLayoutProps {
  side: ReactNode;
  main: ReactNode;
}

const DefaultLayout = (props: DefaultLayoutProps) => {
  const { side, main } = props;
  return (
    <>
      <Header />
      <S.DefaultLayoutWrapper>
        <Grid container>
          <Grid column={3}>{side}</Grid>
          <Grid>{main}</Grid>
        </Grid>
      </S.DefaultLayoutWrapper>
    </>
  );
};

export default DefaultLayout;
