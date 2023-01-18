import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import AddButton from '@src/components/main/AddButton';
import FabButton from '@src/components/main/FabButton';
import MainTopicList from '@src/components/main/MainTopicList';
import TopicCarousel from '@src/components/main/TopicCarousel';
import Member from '@src/types/Member';
import Topic from '@src/types/Topic';

import * as S from './Main.styles';

export interface MainProps {
  member?: Member;
  popularTopics: Topic[];
  topics: Topic[];
}

const Main: React.FC<MainProps> = (props) => {
  const { member, popularTopics, topics } = props;
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
      <TopicCarousel member={member} topics={popularTopics} />
      <S.Observer ref={observerRef} />
      <AddButton onClick={handleWrite} />
      <MainTopicList topics={topics} />
      <FabButton onClick={handleWrite} visible={fabVisible} />
    </>
  );
};

export default Main;
