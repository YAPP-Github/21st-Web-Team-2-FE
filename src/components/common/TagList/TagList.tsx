import React from 'react';

import TagListItem from '@src/components/common/TagList/TagListItem';

import * as S from './TagList.styles';

export interface Tag {
  value: string;
}

export interface TagListProps {
  tags: Tag[];
  onClick: (value: string) => void;
}

const TagList: React.FC<TagListProps> = (props) => {
  const { tags, onClick } = props;

  return (
    <S.Container>
      {tags.map((tag, index) => (
        <TagListItem key={index} value={tag.value} onClick={onClick} />
      ))}
    </S.Container>
  );
};

export default TagList;
