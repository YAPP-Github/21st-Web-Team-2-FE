import React, { ReactNode } from 'react';

import Header from '@src/components/Header';
import Grid from '@src/components/common/Grid';

interface DefaultLayoutProps {
  side: ReactNode;
  main: ReactNode;
}

const DefaultLayout = (props: DefaultLayoutProps) => {
  const { side, main } = props;
  return (
    <>
      <Header />
      <Grid container>
        <Grid column={3}>{side}</Grid>
        <Grid>{main}</Grid>
      </Grid>
    </>
  );
};

export default DefaultLayout;
