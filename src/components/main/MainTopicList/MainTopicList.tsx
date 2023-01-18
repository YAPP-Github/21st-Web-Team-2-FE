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
  const { topics } = props;
  const router = useRouter();

  return (
    <S.TopicsContainer>
      {topics.map((topic) => (
        <TopicCard key={topic.id} {...topic} type="feed" onClick={() => router.push('/topic/1')} />
      ))}
    </S.TopicsContainer>
  );
};

export default MainTopicList;
