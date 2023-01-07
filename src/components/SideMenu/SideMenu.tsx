import React, { useState } from 'react';

import { IconNameType } from '../common/Icon/Icon';
import TagList from '../common/TagList';
import * as S from './SideMenu.styles';
import SideMenuItem from './SideMenuItem';

const CATEGORY_DATA: { id: number; text: string; icon: IconNameType }[] = [
  { id: 0, text: '추천', icon: 'ThumbsUp' },
  { id: 1, text: '커리어 생활', icon: 'Career' },
  { id: 2, text: '개발', icon: 'Computer' },
  { id: 3, text: '디자인', icon: 'Paint' },
  { id: 4, text: '기획', icon: 'Paper' },
];

const TAGS = ['인기태그', '최고태그', '태그', '뭔태그', '그태그', '사랑해요', 'yapp'];

const SideMenu: React.FC = () => {
  const [selectedId, setSelectedId] = useState(0);

  const handleClick = (id: number) => {
    setSelectedId(id);
  };

  return (
    <S.Container>
      {CATEGORY_DATA.map((category) => (
        <SideMenuItem key={category.id} {...category} selected={selectedId === category.id} onClick={handleClick} />
      ))}
      <S.Tags>
        <S.TagTitle>인기태그</S.TagTitle>
        <TagList tags={TAGS} />
      </S.Tags>
    </S.Container>
  );
};

export default SideMenu;
