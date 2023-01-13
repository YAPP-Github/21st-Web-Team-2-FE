import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import TopicCard from '@src/components/common/TopicCard';
import AddButton from '@src/components/main/AddButton';
import FabButton from '@src/components/main/FabButton';
import Member from '@src/types/Member';
import Topic from '@src/types/Topic';

import * as S from './MainTopicList.style';

export interface MainTopicListProps {
  member?: Member;
  topics: Topic[];
}

const MainTopicList: React.FC<MainTopicListProps> = (props) => {
  const { member, topics } = props;
  const [fabVisible, setFabVisible] = useState<boolean>(false);
  const observerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleObserver: IntersectionObserverCallback = useCallback(
    ([target]: IntersectionObserverEntry[]) => setFabVisible(!target.isIntersecting),
    [],
  );

  useEffect(() => {
    if (!observerRef.current) return;
    const observer = new IntersectionObserver(handleObserver);

    observer.observe(observerRef.current);
  }, [handleObserver]);

  const handleWrite = () => {
    router.push('/write');
  };

  return (
    <>
      <S.MainTop>
        <S.Welcome>Hello {member?.nickname || 'Fingers'}!</S.Welcome>
        <div ref={observerRef} />
        <S.SubText>{member?.nickname || '당신'}의 선택은 무엇인가요?</S.SubText>
      </S.MainTop>
      <AddButton onClick={handleWrite} />
      <S.TopicsContainer>
        {topics.map((topic) => (
          <TopicCard key={topic.id} {...topic} type="feed" badge="참여율 TOP" onClick={() => router.push('/topic/1')} />
        ))}
      </S.TopicsContainer>
      <FabButton onClick={handleWrite} visible={fabVisible} />
    </>
  );
};

export default MainTopicList;
