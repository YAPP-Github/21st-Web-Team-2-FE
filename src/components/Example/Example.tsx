import React from 'react';

import StyledButton from './Example.style';

interface MyButtonProps {
  title: string;
}

const MyButton = ({ title }: MyButtonProps) => {
  return (
    <>
      <StyledButton>{title}</StyledButton>
    </>
  );
};

export default MyButton;
