import React, { ChangeEvent, FC, useState } from 'react';

import Icon from '@src/components/common/Icon';
import Input from '@src/components/common/Input';
import { Onboarding } from '@src/pages/onboarding';

import * as S from './ContentJob.styles';

interface Props {
  onboardingValue: Onboarding;
  onChangeOnboardingStep: (key: 'name' | 'job' | 'year', value: string) => void;
}
// GYU-TODO: 입력시 다음 버튼 및 직업 설정 기능 구현
const ContentName: FC<Props> = (props) => {
  const [job, setJob] = useState('');
  const [etcValue, setEtcValue] = useState('');

  const handleClickJob = (_job: string) => {
    setJob(_job);
  };

  const handleChangeEtc = (e: ChangeEvent<HTMLInputElement>) => {
    setEtcValue(e.target.value);
  };

  const handleClickNext = () => {
    onChangeOnboardingStep('job', job);
  };

  const { onChangeOnboardingStep, onboardingValue } = props;

  const { name } = onboardingValue;
  return (
    <S.Wrapper>
      <S.Title>Hello {name}!</S.Title>
      <S.SubTitle>반가워요, {name}님 : )</S.SubTitle>
      <S.SubTitle>현재 어떤 일을 하고 계신가요?</S.SubTitle>
      <S.ButtonWrapper>
        <S.SelectButton onClick={() => handleClickJob('developer')} $selected={job === 'developer'}>
          <Icon name="Computer" size={18} />
          개발
        </S.SelectButton>
        <S.SelectButton onClick={() => handleClickJob('designer')} $selected={job === 'designer'}>
          <Icon name="Paint" size={18} />
          디자인
        </S.SelectButton>
        <S.SelectButton onClick={() => handleClickJob('pm')} $selected={job === 'pm'}>
          <Icon name="Paper" size={18} />
          기획
        </S.SelectButton>
      </S.ButtonWrapper>
      <S.EtcWrapper>
        <S.SelectButton onClick={() => handleClickJob('etc')} $selected={job === 'etc'}>
          기타
        </S.SelectButton>
        {job === 'etc' && <Input value={etcValue} onChange={handleChangeEtc} style={{ height: '40px' }} />}
      </S.EtcWrapper>
      <S.ButtonWrapper>
        <S.Button disabled={!job} onClick={handleClickNext}>
          다음
        </S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default ContentName;
