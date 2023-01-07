import React, { ReactNode } from 'react';

import * as S from './Grid.styles';
import GridContainer from './GridContainer';

export interface GridProps {
  container?: boolean;
  column?: number;
  children?: ReactNode;
}

const Grid: React.FC<GridProps> = (props) => {
  const { container, column = 12, children } = props;

  if (container) {
    return <GridContainer>{children}</GridContainer>;
  }

  return <S.Container $column={column}>{children}</S.Container>;
};

export default Grid;
