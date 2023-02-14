import React, { ChangeEvent, FC, useState } from 'react';

import Icon from '@src/components/common/Icon';
import { IconNameType } from '@src/components/common/Icon/Icon';
import Input from '@src/components/common/Input';
import { Onboarding, OnboardingKey } from '@src/pages/onboarding/index.page';

import * as S from './ContentJob.styles';

interface Props {
  onboardingValue: Onboarding;
  onChangeOnboardingStep: (key: OnboardingKey, value: string) => void;
}

type Job = '개발' | '디자인' | '기획' | 'etc' | null;
const JOBS: { job: Job; icon: IconNameType }[] = [
  { job: '개발', icon: 'Computer' },
  { job: '디자인', icon: 'Paint' },
  { job: '기획', icon: 'Paper' },
];

const ContentJob: FC<Props> = (props) => {
  const [selected, setSelected] = useState<Job>(null);
  const [etcValue, setEtcValue] = useState('');

  const handleChangeEtc = (e: ChangeEvent<HTMLInputElement>) => {
    setEtcValue(e.target.value);
  };

  const handleClickNext = () => {
    if (selected === null) return;

    if (selected === 'etc') {
      onChangeOnboardingStep('jobCategory', etcValue);
      return;
    }

    onChangeOnboardingStep('jobCategory', selected);
  };

  const { onChangeOnboardingStep, onboardingValue } = props;

  const { nickname } = onboardingValue;
  return (
    <S.Wrapper>
      <S.Title>Hello {nickname}!</S.Title>
      <S.SubTitle>반가워요, {nickname}님 : )</S.SubTitle>
      <S.SubTitle>현재 어떤 일을 하고 계신가요?</S.SubTitle>
      <S.ButtonWrapper>
        {JOBS.map(({ job, icon }) => (
          <S.SelectButton key={job} onClick={() => setSelected(job)} $selected={job === selected}>
            <Icon name={icon} size={18} />
            {job}
          </S.SelectButton>
        ))}
      </S.ButtonWrapper>
      <S.EtcWrapper>
        <S.SelectButton onClick={() => setSelected('etc')} $selected={selected === 'etc'}>
          기타
        </S.SelectButton>
        {selected === 'etc' && <Input value={etcValue} onChange={handleChangeEtc} style={{ height: '40px' }} />}
      </S.EtcWrapper>
      <S.ButtonWrapper>
        <S.Button disabled={checkDisabled(selected, etcValue)} onClick={handleClickNext}>
          다음
        </S.Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

const checkDisabled = (job: Job, etc: string) => {
  if (job === null) return true;
  if (job === 'etc' && etc.trim() === '') return true;

  return false;
};

export default ContentJob;
