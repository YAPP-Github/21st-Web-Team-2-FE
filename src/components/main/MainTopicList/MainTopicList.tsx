import Link from 'next/link';
import React from 'react';

import TopicCard from '@src/components/common/TopicCard';
import Topic from '@src/types/Topic';

import * as S from './MainTopicList.style';

export interface MainTopicListProps {
  topics: Topic[];
}

const MainTopicList: React.FC<MainTopicListProps> = (props) => {
  const { topics } = props;

  return (
    <S.TopicsContainer>
      {topics.map((topic) => (
        <Link key={topic.id} href={`/topic/${topic.id}`}>
          <TopicCard {...topic} type="feed" badge="참여율 TOP" />
        </Link>
      ))}
    </S.TopicsContainer>
  );
};

export default MainTopicList;
