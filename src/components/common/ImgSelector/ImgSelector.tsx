import React, { ChangeEvent, ReactNode, useRef } from 'react';

import * as S from './ImgSelector.styles';

export interface ImgSelectorProps {
  children?: ReactNode;
  onChange: (img: string) => void;
}

export default function ImgSelector(props: ImgSelectorProps): JSX.Element {
  const { children, onChange } = props;

  const imgInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    imgInput.current?.click();
  };

  const handleSelectImg = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files as FileList;
    if (!files[0]) {
      return;
    }

    const imgURL = URL.createObjectURL(files[0]);
    onChange(imgURL);
  };

  return (
    <>
      <S.Button type="button" onClick={handleClick}>
        {children}
      </S.Button>
      <input data-testid="image-input" type="file" accept="image/*" hidden ref={imgInput} onChange={handleSelectImg} />
    </>
  );
}
