import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { GetTopicsResponseData } from '@src/apis';
import AddButton from '@src/components/main/AddButton';
import FabButton from '@src/components/main/FabButton';
import MainTopicList from '@src/components/main/MainTopicList';
import TopicCarousel from '@src/components/main/TopicCarousel';

import * as S from './Main.styles';

export interface MainProps {
  popularTopics: GetTopicsResponseData[];
}

const Main: React.FC<MainProps> = (props) => {
  const { popularTopics } = props;
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
      <TopicCarousel topics={popularTopics} />
      <S.Observer ref={observerRef} />
      <AddButton onClick={handleWrite} />
      <MainTopicList />
      <FabButton onClick={handleWrite} visible={fabVisible} />
    </>
  );
};

export default Main;
