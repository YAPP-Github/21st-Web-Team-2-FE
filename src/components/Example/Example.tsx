import Image from 'next/image';
import React from 'react';

import StyledButton from './Example.style';

interface IMyButton {
  title: string;
}

const MyButton = ({ title }: IMyButton) => {
  return (
    <div>
      <StyledButton>{title}</StyledButton>
    </div>
  );
};

export default MyButton;
