import React from 'react';

import * as S from './TagList.styles';
import TagListItem from './TagListItem';
import { TagType } from './TagListItem/TagListItem.styles';

export interface TagListProps {
  tags: string[];
  type?: TagType;
  onClick?: (value: string) => void;
  onDelete?: (value: string) => void;
}

const TagList: React.FC<TagListProps> = (props) => {
  const { tags, onClick, onDelete } = props;

  return (
    <S.Container>
      {tags.map((tag, index) => (
        <TagListItem key={index} value={tag} onClick={onClick} onDelete={onDelete} />
      ))}
    </S.Container>
  );
};

export default TagList;
