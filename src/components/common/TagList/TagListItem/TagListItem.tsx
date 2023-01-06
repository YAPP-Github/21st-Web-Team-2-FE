import React, { MouseEvent } from 'react';

import Icon from '@src/components/common/Icon';

import * as S from './TagListItem.styles';
import { TagType } from './TagListItem.styles';

export interface TagListItemProps {
  value: string;
  type?: TagType;
  onClick?: (value: string) => void;
  onDelete?: (value: string) => void;
}

const TagListItem: React.FC<TagListItemProps> = (props) => {
  const { value, type, onClick, onDelete } = props;

  const handleClick = () => {
    onClick && onClick(value);
  };

  const handleDelete = (e: MouseEvent) => {
    e.stopPropagation();
    onDelete && onDelete(value);
  };

  return (
    <S.Container type={type} onClick={handleClick}>
      {value}
      {type === 'delete' && <Icon data-testid="onDelete" name="X" size={18} onClick={handleDelete} />}
    </S.Container>
  );
};

export default TagListItem;
