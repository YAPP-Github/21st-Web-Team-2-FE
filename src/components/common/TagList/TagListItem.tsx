import React from 'react';

import * as S from './TagListItem.styles';

export interface TagListItemProps {
  value: string;
  onClick: (value: string) => void;
}

const TagListItem: React.FC<TagListItemProps> = (props) => {
  const { value, onClick } = props;

  const handleClick = () => {
    onClick(value);
  };

  return <S.Container onClick={handleClick}>{value}</S.Container>;
};

export default TagListItem;
