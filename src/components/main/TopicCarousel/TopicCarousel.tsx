/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Link from 'next/link';
import React, { useCallback, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { GetTopicsResponseData } from '@src/apis';
import Icon from '@src/components/common/Icon';
import TopicCard from '@src/components/common/TopicCard';
import useProfile from '@src/queires/useProfile';
import $userSession from '@src/recoil/userSession';

import * as S from './TopicCarousel.styles';

interface TopicCarouselProps {
  topics: GetTopicsResponseData[];
}

const TRANSITION = 'all 0.5s ease-in-out';

const TopicCarousel: React.FC<TopicCarouselProps> = (props: TopicCarouselProps) => {
  const { topics } = props;
  const tokens = useRecoilValue($userSession);
  const { data: member } = useProfile(tokens?.accessToken);

  const carouselTopics = [{ ...topics[topics.length - 1], topicId: -1 }, ...topics, { ...topics[0], topicId: -2 }];
  const [current, setCurrent] = useState<number>(1);
  const [displayCurrent, setDisplayCurrent] = useState<number>(1);
  const [transition, setTransition] = useState<string>(TRANSITION);
  const [delay, setDelay] = useState<boolean>(false);

  const topicContainerStyle = css`
    transition: ${transition};
    transform: translateX(calc(-${current} * (100% + 24px)));
  `;

  const replaceSlide = useCallback((destination: number) => {
    setDisplayCurrent(destination);
    setTimeout(() => {
      setTransition('');
      setCurrent(destination);
    }, 500);
  }, []);

  const moveCarousel = (value: number) => () => {
    if (delay) return;
    setDelay(true);

    setTransition(TRANSITION);

    const destination = current + value;
    setCurrent(destination);

    setTimeout(() => {
      setDelay(false);
    }, 500);

    if (destination > carouselTopics.length - 2) {
      return replaceSlide(1);
    }
    if (destination <= 0) {
      return replaceSlide(carouselTopics.length - 2);
    }
    setDisplayCurrent(destination);
  };

  return (
    <>
      <S.Header>
        <div>
          <S.Welcome>Hello {member?.nickname || 'Fingers'}!</S.Welcome>
          <S.SubText>{member?.nickname || '당신'}의 선택은 무엇인가요?</S.SubText>
        </div>
        <S.HeaderRight>
          <S.StepText>
            <S.Highlight>{displayCurrent}</S.Highlight>/{topics.length}
          </S.StepText>
          <S.Button onClick={moveCarousel(-1)}>
            <Icon name="Next" color="G8" width="8px" height="14px" transform="rotate(180)" />
          </S.Button>
          <S.Button onClick={moveCarousel(+1)}>
            <Icon name="Next" color="G8" width="8px" height="14px" />
          </S.Button>
        </S.HeaderRight>
      </S.Header>
      <S.CarouselWrapper>
        <S.TopicContainer css={topicContainerStyle}>
          {carouselTopics.map((topic) => (
            <S.TopicWrapper key={topic.topicId}>
              <Link href={`/topic/${topic.topicId}`} passHref>
                {/* TODO: badge 정책 필요 */}
                <TopicCard key={topic.topicId} {...topic} type="feed" badge="참여율 TOP" />
              </Link>
            </S.TopicWrapper>
          ))}
        </S.TopicContainer>
      </S.CarouselWrapper>
    </>
  );
};

export default TopicCarousel;
