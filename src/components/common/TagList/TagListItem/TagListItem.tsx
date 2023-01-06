import React from 'react';

import Icon from '@src/components/common/Icon';

import * as S from './TagListItem.styles';
import { TagType } from './TagListItem.styles';

export interface TagListItemProps {
  value: string;
  type?: TagType;
  onClick?: (value: string) => void;
}

const TagListItem: React.FC<TagListItemProps> = (props) => {
  const { value, type, onClick } = props;

  const handleClick = () => {
    onClick && onClick(value);
  };

  return (
    <S.Container type={type} onClick={handleClick}>
      {value}
      {type === 'delete' && <Icon name="X" size={18} />}
    </S.Container>
  );
};

export default TagListItem;
