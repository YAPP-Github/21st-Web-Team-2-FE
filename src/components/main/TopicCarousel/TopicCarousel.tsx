import Link from 'next/link';
import React, { useState } from 'react';

import Icon from '@src/components/common/Icon';
import TopicCard from '@src/components/common/TopicCard';
import Member from '@src/types/Member';
import Topic from '@src/types/Topic';

import * as S from './TopicCarousel.styles';

interface TopicCarouselProps {
  topics: Topic[];
  member?: Member;
}

const TopicCarousel: React.FC<TopicCarouselProps> = (props: TopicCarouselProps) => {
  const { topics, member } = props;
  const [current, setCurrent] = useState<number>(1);

  const handleCurrent =
    (value: number): (() => void) =>
    () => {
      const change = current + value;
      if (change > topics.length) {
        return setCurrent(1);
      }
      if (change <= 0) {
        return setCurrent(topics.length);
      }
      setCurrent(change);
    };

  return (
    <S.Container>
      <S.Header>
        <div>
          <S.Welcome>Hello {member?.nickname || 'Fingers'}!</S.Welcome>
          <S.SubText>{member?.nickname || '당신'}의 선택은 무엇인가요?</S.SubText>
        </div>
        <S.HeaderRight>
          <S.StepText>
            <S.Highlight>{current}</S.Highlight>/{topics.length}
          </S.StepText>
          <S.Button onClick={handleCurrent(-1)}>
            <Icon name="Next" color="G8" width="8px" height="14px" transform="rotate(180)" />
          </S.Button>
          <S.Button onClick={handleCurrent(+1)}>
            <Icon name="Next" color="G8" width="8px" height="14px" />
          </S.Button>
        </S.HeaderRight>
      </S.Header>
      <S.CarouselWrapper>
        <S.TopicContainer>
          {topics.map((topic) => (
            <S.TopicWrapper key={topic.id}>
              <Link href={`/topic/${topic.id}`}>
                <TopicCard key={topic.id} {...topic} type="feed" badge="참여율 TOP" />
              </Link>
            </S.TopicWrapper>
          ))}
        </S.TopicContainer>
      </S.CarouselWrapper>
    </S.Container>
  );
};

export default TopicCarousel;
