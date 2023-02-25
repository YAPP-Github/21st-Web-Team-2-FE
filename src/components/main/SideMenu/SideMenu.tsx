import React, { useState } from 'react';

import { GetTopicsQuery } from '@src/apis';
import { IconNameType } from '@src/components/common/Icon/Icon';
import TagList from '@src/components/common/TagList';

import * as S from './SideMenu.styles';
import SideMenuItem from './SideMenuItem';

export type MenuCategory = GetTopicsQuery['category'];
const CATEGORY_DATA: { value: MenuCategory; text: string; icon: IconNameType }[] = [
  { value: null, text: '추천', icon: 'ThumbsUp' },
  { value: 'CAREER', text: '커리어 생활', icon: 'Career' },
  { value: 'DEVELOPER', text: '개발', icon: 'Computer' },
  { value: 'DESIGN', text: '디자인', icon: 'Paint' },
  { value: 'PRODUCT_MANAGER', text: '기획', icon: 'Paper' },
];

// TODO: 인기태그 api
const TAGS = ['Java', 'javascript', 'Kotlin', 'Yapp', '취업', '이직', 'Next'];

interface SideMenuProps {
  onSelectCategory: (value: MenuCategory) => void;
}

const SideMenu: React.FC<SideMenuProps> = (props: SideMenuProps) => {
  const { onSelectCategory } = props;
  const [selected, setSelected] = useState<MenuCategory>(null);

  const handleClick = (value: MenuCategory) => {
    setSelected(value);
    onSelectCategory(value);
  };

  return (
    <S.Container>
      {CATEGORY_DATA.map((category) => (
        <SideMenuItem key={category.value} {...category} selected={selected === category.value} onClick={handleClick} />
      ))}
      <S.Tags>
        <S.TagTitle>인기태그</S.TagTitle>
        <TagList tags={TAGS} />
      </S.Tags>
    </S.Container>
  );
};

export default SideMenu;
