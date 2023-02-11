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
      {/*GYU-TODO:  해당 부분에서 빈배열로 데이터가 오는 경우 처리가 안되어 있어서 임시로 처리
          @현우님이 해당 부분 참고하셔서 수정하시면 될거 같아요! 
          TopicCard 에서 topic 이 없을때 에러가 발생합니다!
          시작점이 이곳이라서 이곳에 임시 에러 방지 구현했습니다.
      */}
      {popularTopics.length ? <TopicCarousel topics={popularTopics} /> : null}
      <S.Observer ref={observerRef} />
      <AddButton onClick={handleWrite} />
      <MainTopicList />
      <FabButton onClick={handleWrite} visible={fabVisible} />
    </>
  );
};

export default Main;
