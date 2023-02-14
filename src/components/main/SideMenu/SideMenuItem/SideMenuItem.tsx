import React from 'react';

import Icon, { IconNameType } from '@src/components/common/Icon/Icon';
import { MenuCategory } from '@src/components/main/SideMenu/SideMenu';

import * as S from './SideMenuItem.styles';

interface SideMenuItemProps {
  value: MenuCategory;
  text: string;
  icon?: IconNameType;
  selected?: boolean;
  onClick: (value: MenuCategory) => void;
}

const SideMenuItem: React.FC<SideMenuItemProps> = (props: SideMenuItemProps) => {
  const { value, text, icon, selected = false, onClick } = props;

  const handleClick = () => {
    onClick(value);
  };

  return (
    <S.Container $selected={selected} onClick={handleClick}>
      {icon && <Icon name={icon} />}
      {text}
    </S.Container>
  );
};

export default SideMenuItem;
