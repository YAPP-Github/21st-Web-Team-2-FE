import { useRouter } from 'next/router';
import React from 'react';

import TopicCard from '@src/components/common/TopicCard';
import Member from '@src/types/Member';
import Topic from '@src/types/Topic';

import * as S from './MainTopicList.style';

export interface MainTopicListProps {
  member?: Member;
  topics: Topic[];
}

const MainTopicList: React.FC<MainTopicListProps> = (props) => {
  const { member, topics } = props;
  const router = useRouter();

  return (
    <>
      <S.MainTop>
        <S.Welcome>Hello {member?.nickname || 'Fingers'}!</S.Welcome>
        <S.SubText>{member?.nickname || '당신'}의 선택은 무엇인가요?</S.SubText>
      </S.MainTop>
      <S.TopicsContainer>
        {topics.map((topic) => (
          <TopicCard key={topic.id} {...topic} type="feed" badge="참여율 TOP" onClick={() => router.push('/topic/1')} />
        ))}
      </S.TopicsContainer>
    </>
  );
};

export default MainTopicList;
