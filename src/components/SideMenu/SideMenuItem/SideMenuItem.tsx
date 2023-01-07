import React from 'react';

import Icon, { IconNameType } from '@src/components/common/Icon/Icon';

import * as S from './SideMenuItem.styles';

interface SideMenuItemProps {
  text: string;
  icon?: IconNameType;
  selected?: boolean;
  onClick: (value: string) => void;
}

const SideMenuItem: React.FC<SideMenuItemProps> = (props: SideMenuItemProps) => {
  const { text, icon, selected = false, onClick } = props;

  const handleClick = () => {
    onClick(text);
  };

  return (
    <S.Container $selected={selected} onClick={handleClick}>
      {icon && <Icon name={icon} />}
      {text}
    </S.Container>
  );
};

export default SideMenuItem;
