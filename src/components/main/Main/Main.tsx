import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { GetTopicsResponseData } from '@src/apis';
import AddButton from '@src/components/main/AddButton';
import FabButton from '@src/components/main/FabButton';
import MainTopicList from '@src/components/main/MainTopicList';
import { MenuCategory } from '@src/components/main/SideMenu/SideMenu';
import TopicCarousel from '@src/components/main/TopicCarousel';
import $userSession from '@src/recoil/userSession';

import * as S from './Main.styles';

export interface MainProps {
  category: MenuCategory;
  popularTopics: GetTopicsResponseData[];
}

const Main: React.FC<MainProps> = (props) => {
  const { category, popularTopics } = props;
  const [fabVisible, setFabVisible] = useState<boolean>(false);
  const observerRef = useRef<HTMLDivElement>(null);

  const tokens = useRecoilValue($userSession);
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

  const handleWrite = async () => {
    if (!tokens) {
      alert('로그인이 필요합니다!');
      await router.push('/login');
      return;
    }
    await router.push('/write');
  };

  return (
    <>
      {popularTopics.length && (
        <>
          <TopicCarousel topics={popularTopics} />
          <S.Space />
        </>
      )}
      <div ref={observerRef} />
      <AddButton onClick={handleWrite} />
      <MainTopicList category={category} />
      <FabButton onClick={handleWrite} visible={fabVisible} />
    </>
  );
};

export default Main;
