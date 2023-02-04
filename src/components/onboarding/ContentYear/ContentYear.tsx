import React, { FC, useState } from 'react';

import * as S from './ContentYear.styles';
import YearSelector from './YearSelector';

const ContentYear: FC = () => {
  const [year, setYear] = useState(1);

  return (
    <S.Wrapper>
      {/* GYU-TODO: 선택한 닉네임, 직업 값 가져와서 설정 */}
      <S.Title>Hello Typing!</S.Title>
      <S.SubTitle>000일을 한지 얼마나 되셨나요?</S.SubTitle>
      <S.YearSelectorWrapper>
        <YearSelector defaultValue={year} onChangeYear={setYear} />
      </S.YearSelectorWrapper>
      <S.ButtonWrapper>
        <S.Button>다 했어요!</S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default ContentYear;
