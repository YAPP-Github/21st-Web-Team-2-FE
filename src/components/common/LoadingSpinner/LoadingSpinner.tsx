import { FC } from 'react';

import theme from '@src/styles/theme';

import * as S from './LoadingSpinner.styles';

interface Props {
  /**
   * hex값 string 또는 color string(red, blue, ...)
   */
  color?: string;
  size?: number;
}
const LoadingSpinner: FC<Props> = (props) => {
  const { color = theme.color.Primary1, size = 50 } = props;

  return (
    <S.Background>
      <S.Spinner role="progressbar" $size={size} $color={color} />
    </S.Background>
  );
};

export default LoadingSpinner;
