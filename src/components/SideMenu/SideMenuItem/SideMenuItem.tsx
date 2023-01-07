import React from 'react';

import Icon, { IconNameType } from '@src/components/common/Icon/Icon';

import * as S from './SideMenuItem.styles';

interface SideMenuItemProps {
  id: number;
  text: string;
  icon?: IconNameType;
  selected?: boolean;
  onClick: (id: number) => void;
}

const SideMenuItem: React.FC<SideMenuItemProps> = (props: SideMenuItemProps) => {
  const { id, text, icon, selected = false, onClick } = props;

  const handleClick = () => {
    onClick(id);
  };

  return (
    <S.Container $selected={selected} onClick={handleClick}>
      {icon && <Icon name={icon} />}
      {text}
    </S.Container>
  );
};

export default SideMenuItem;
