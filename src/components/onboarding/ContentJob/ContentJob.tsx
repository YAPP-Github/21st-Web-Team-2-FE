import React, { ChangeEvent, FC, useState } from 'react';

import Icon from '@src/components/common/Icon';
import Input from '@src/components/common/Input';
import { Onboarding, OnboardingKey } from '@src/pages/onboarding';

import * as S from './ContentJob.styles';

type Job = 'developer' | 'designer' | 'pm' | 'etc' | null;
interface Props {
  onboardingValue: Onboarding;
  onChangeOnboardingStep: (key: OnboardingKey, value: string) => void;
}
const ContentJob: FC<Props> = (props) => {
  const [job, setJob] = useState<Job>(null);
  const [etcValue, setEtcValue] = useState('');

  const handleChangeEtc = (e: ChangeEvent<HTMLInputElement>) => {
    setEtcValue(e.target.value);
  };

  const handleClickNext = () => {
    if (job === null) return;

    if (job === 'etc') {
      onChangeOnboardingStep('job', etcValue);
      return;
    }

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
        <S.SelectButton onClick={() => setJob('developer')} $selected={job === 'developer'}>
          <Icon name="Computer" size={18} />
          개발
        </S.SelectButton>
        <S.SelectButton onClick={() => setJob('designer')} $selected={job === 'designer'}>
          <Icon name="Paint" size={18} />
          디자인
        </S.SelectButton>
        <S.SelectButton onClick={() => setJob('pm')} $selected={job === 'pm'}>
          <Icon name="Paper" size={18} />
          기획
        </S.SelectButton>
      </S.ButtonWrapper>
      <S.EtcWrapper>
        <S.SelectButton onClick={() => setJob('etc')} $selected={job === 'etc'}>
          기타
        </S.SelectButton>
        {job === 'etc' && <Input value={etcValue} onChange={handleChangeEtc} style={{ height: '40px' }} />}
      </S.EtcWrapper>
      <S.ButtonWrapper>
        <S.Button disabled={checkDisabled(job, etcValue)} onClick={handleClickNext}>
          다음
        </S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

const checkDisabled = (job: Job, etc: string) => {
  if (job === null) return true;
  if (job === 'etc' && etc.trim() === '') true;

  return false;
};

export default ContentJob;
