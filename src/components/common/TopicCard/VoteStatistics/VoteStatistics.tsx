import React from 'react';
import { useRecoilValue } from 'recoil';

import Icon, { IconNameType } from '@src/components/common/Icon/Icon';
import useMember from '@src/queires/useMember';
import $userSession from '@src/recoil/userSession';
import { VotedAmountStatistics } from '@src/types/VoteOption';

import * as S from './VoteStatistics.style';

interface VoteStatisticsProps {
  statistics: VotedAmountStatistics;
}

const VoteStatistics = (props: VoteStatisticsProps) => {
  const { statistics } = props;
  const userSession = useRecoilValue($userSession);
  const { data: member } = useMember(userSession?.accessToken);

  if (!member) return null;
  const { jobCategory } = member;
  const currentCategory = JOB_CATEGORIES[jobCategory] || JOB_CATEGORIES.ETC;
  const otherCategories = Object.values(JOB_CATEGORIES).filter((category) => category !== currentCategory);

  const totalAmount = Object.values(statistics).reduce((prev, current) => prev + current, 0);

  return (
    <S.Container>
      <S.Main>
        <Icon name={currentCategory.icon} size={16} />
        {currentCategory.text} {statistics[currentCategory.key]}명(
        {Math.floor(statistics[currentCategory.key] / totalAmount || 0)}%)이 동의했어요!
      </S.Main>
      <S.Sub>
        {otherCategories.map((category) => (
          <S.SubItem key={category.key}>
            <Icon name={category.icon} size={14} />
            {statistics[category.key]}명({Math.floor(statistics[category.key] / totalAmount || 0)}%)
          </S.SubItem>
        ))}
      </S.Sub>
    </S.Container>
  );
};

type JobCategory = '개발' | '디자인' | '기획';
const JOB_CATEGORIES: {
  [key in JobCategory | string]: {
    icon: IconNameType;
    key: keyof VotedAmountStatistics;
    text: string;
  };
} = {
  개발: {
    icon: 'Computer',
    text: '개발자',
    key: 'developerVoteAmount',
  },
  디자인: {
    icon: 'Paint', // TODO: size 축소 시 문제 해결
    text: '디자이너',
    key: 'designerVoteAmount',
  },
  기획: {
    icon: 'Paper',
    text: '기획자',
    key: 'pmVoteAmount',
  },
  ETC: {
    icon: 'Guitar',
    text: '기타 직군',
    key: 'etcVoteAmount',
  },
};

export default VoteStatistics;
