import React, { ChangeEvent, FC, useState } from 'react';

import Input from '@src/components/common/Input';

import * as S from './ContentName.styles';

const ContentName: FC = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setName(value);
  };

  return (
    <S.Wrapper>
      <S.Title>Hello ‘ooo’!</S.Title>
      <S.SubTitle>User님을 어떤 이름으로 부르면 될까요?</S.SubTitle>
      <S.InputWrapper>
        <Input
          placeholder="사용할 닉네임을 적어주세요."
          value={name}
          onChange={handleChange}
          maxLength={20}
          error={error}
          errorMessage="이미 있는 이름이에요 :( 새로운 이름으로 작성해주세요!"
        />
      </S.InputWrapper>
      <S.Button
        disabled={!name}
        onClick={() => {
          setError(true);
        }}
      >
        다음
      </S.Button>
    </S.Wrapper>
  );
};

export default ContentName;
