import React, { useState } from 'react';

import Topic from '@src/types/Topic';
import VoteOption from '@src/types/VoteOption';

import Icon from '../Icon';
import SelectOption from './SelectOption';
import * as S from './TopicCard.style';

export type TopicCardType = 'feed' | 'detail';

interface TopicCardProps extends Omit<Topic, 'liked' | 'likedAmount' | 'tags'> {
  badge?: string; // TODO: Icon등의 형태 논의 필요
  type: TopicCardType;
  onClick?: () => void;
}

const TopicCard = (props: TopicCardProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const { title, contents, voteOptions: defaultOptions, member, commentAmount, badge, type, onClick } = props;
  const [options, setOptions] = useState<VoteOption[]>(defaultOptions);
  const selectedOption = options.find((option) => option.voted);
  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(selectedOption?.voteOptionId || null);
  const votedAmount = options.reduce((prev, option) => prev + option.votedAmount, 0);

  const isFeed = type === 'feed';

  const handleClickOption = (id: number) => {
    const changed = options.map((option) => {
      if (option.voteOptionId === selectedOptionId) {
        option.votedAmount -= 1;
        return option;
      }
      if (option.voteOptionId === id) {
        option.votedAmount += 1;
      }
      return option;
    });
    setOptions(changed);
    setSelectedOptionId(id);

    if (selectedOptionId === id) {
      setSelectedOptionId(null);
    }

    // TODO: api
  };

  return (
    <S.Container onClick={onClick} ref={ref}>
      <S.TopicTop>
        <S.TopicHeader>
          <div>
            {badge && (
              <S.Badge>
                <Icon name="ThumbsUp" size={18} />
                {badge}
              </S.Badge>
            )}
            <S.Title>{title}</S.Title>
          </div>
          {isFeed && <Icon name="Share" />}
        </S.TopicHeader>
        <S.Contents>{contents}</S.Contents>
        <S.SelectOptionContainer $odd={options.length % 2 === 1}>
          {options.map((option) => (
            <SelectOption
              key={option.voteOptionId}
              {...option}
              rate={option.votedAmount / votedAmount}
              result={selectedOptionId !== null}
              selected={selectedOptionId === option.voteOptionId}
              onClick={handleClickOption}
            />
          ))}
        </S.SelectOptionContainer>
      </S.TopicTop>
      <S.TopicBottom>
        {isFeed ? (
          <S.AuthorInfo>
            <S.Profile src={member.profileImage || ''} alt={member.nickname} width="28" height="28" />
            <span>{member.nickname}</span>
          </S.AuthorInfo>
        ) : (
          <S.LikeBtn>
            <Icon name="Clap" color="G7" size={24} />
            <span>좋아요</span>
          </S.LikeBtn>
        )}
        <S.TopicInfoContainer>
          <S.TopicInfo>
            <Icon name="HandsUp" size={16} />
            {('00' + votedAmount).slice(-3)}명 참여
          </S.TopicInfo>
          ·
          <S.TopicInfo>
            <Icon name="Bubble" size={16} />
            {('00' + commentAmount).slice(-3)}개 댓글
          </S.TopicInfo>
        </S.TopicInfoContainer>
      </S.TopicBottom>
    </S.Container>
  );
};

export default React.forwardRef<HTMLDivElement, TopicCardProps>(TopicCard);
