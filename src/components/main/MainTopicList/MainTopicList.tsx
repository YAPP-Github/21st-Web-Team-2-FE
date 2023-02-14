import Link from 'next/link';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import TopicCard from '@src/components/common/TopicCard';
import { MenuCategory } from '@src/components/main/SideMenu/SideMenu';
import { useGetTopics } from '@src/queires/useGetTopics';

import * as S from './MainTopicList.style';

interface MainTopicListProps {
  category: MenuCategory;
}

const MainTopicList: React.FC<MainTopicListProps> = (props: MainTopicListProps) => {
  const { category } = props;
  const { fetchNextPage, data: topics = [], isLoading, hasNextPage } = useGetTopics(category);

  const { ref } = useInView({
    onChange: (inView) => {
      if (inView && hasNextPage) {
        fetchNextPage();
      }
    },
  });

  if (isLoading) return null;

  return (
    <S.TopicsContainer>
      {topics.map((topic) => (
        <Link key={topic.topicId} href={`/topic/${topic.topicId}`} passHref>
          <TopicCard {...topic} type="feed" />
        </Link>
      ))}
      <div ref={ref} />
    </S.TopicsContainer>
  );
};

export default MainTopicList;
