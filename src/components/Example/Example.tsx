import Image from 'next/image';
import React from 'react';

import StyledButton from './Example.style';

interface IMyButton {
  title: string;
}

const MyButton = ({ title, ...props }: IMyButton) => {
  return (
    <div>
      <StyledButton>{title}</StyledButton>
      <Image src={''} alt={''} {...props} />
    </div>
  );
};

export default MyButton;
