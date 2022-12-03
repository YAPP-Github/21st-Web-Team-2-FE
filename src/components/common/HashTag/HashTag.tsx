import React from 'react';

import * as S from './HashTag.styles';

export interface HashTagProps {
  value: string;
  onClick: (value: string) => void;
}

const HashTag: React.FC<HashTagProps> = (props) => {
  const { value, onClick } = props;

  const handleClick = () => {
    onClick(value);
  };

  return <S.Container onClick={handleClick}>{value}</S.Container>;
};

export default HashTag;
