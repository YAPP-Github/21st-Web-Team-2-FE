import React from 'react';

import * as S from './TagList.styles';
import TagListItem from './TagListItem';
import { TagType } from './TagListItem/TagListItem.styles';

export interface Tag {
  value: string;
}

export interface TagListProps {
  tags: Tag[];
  type?: TagType;
  onClick?: (value: string) => void;
  onDelete?: (value: string) => void;
}

const TagList: React.FC<TagListProps> = (props) => {
  const { tags, onClick, onDelete } = props;

  return (
    <S.Container>
      {tags.map((tag, index) => (
        <TagListItem key={index} value={tag.value} onClick={onClick} onDelete={onDelete} />
      ))}
    </S.Container>
  );
};

export default TagList;
