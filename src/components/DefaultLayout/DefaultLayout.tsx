import React, { ReactNode } from 'react';

import Header from '@src/components/Header';
import Grid from '@src/components/common/Grid';

import * as S from './DefaultLayout.style';

interface DefaultLayoutProps {
  left: ReactNode;
  main: ReactNode;
}

const DefaultLayout = (props: DefaultLayoutProps) => {
  const { left, main } = props;
  return (
    <S.Container>
      <Header />
      <Grid container>
        <Grid column={3}>{left}</Grid>
        <Grid>{main}</Grid>
      </Grid>
    </S.Container>
  );
};

export default DefaultLayout;
