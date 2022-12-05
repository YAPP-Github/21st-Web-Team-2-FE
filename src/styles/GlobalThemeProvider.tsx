import { ThemeProvider } from '@emotion/react';
import React, { ReactNode } from 'react';

import { globalStyle } from './GlobalStyle';
import Theme from './theme';

const GlobalThemeProvider: React.FC<{ theme: typeof Theme; children: ReactNode }> = ({ theme, children }) => {
  return (
    <>
      {globalStyle}
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default GlobalThemeProvider;
