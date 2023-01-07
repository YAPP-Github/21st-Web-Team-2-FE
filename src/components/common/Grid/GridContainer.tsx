import React, { ReactNode } from 'react';

import * as S from './GridContainer.styles';

export interface GridContainerProps {
  children: ReactNode;
}

const GridContainer: React.FC<GridContainerProps> = (props) => {
  const { children } = props;
  return <S.Container>{children}</S.Container>;
};

export default GridContainer;
