import Link from 'next/link';
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

  return (
    <S.TopicsContainer>
      {topics.map((topic) => (
        <Link key={topic.topicId} href={`/topic/${topic.topicId}`} passHref>
          <TopicCard {...topic} type="feed" />
        </Link>
      ))}
    </S.TopicsContainer>
  );
};

export default MainTopicList;
