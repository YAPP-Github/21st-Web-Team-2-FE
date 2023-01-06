import React from 'react';

import Topic from '@src/types/Topic';

import Icon from '../common/Icon';
import SelectOption from './SelectOption';
import * as S from './TopicCard.style';

interface TopicCardProps extends Topic {
  badge?: string;
}

const TopicCard = (props: TopicCardProps) => {
  const { title, contents, options, member, participation, comments } = props;

  return (
    <S.Container>
      <S.TopicTop>
        <S.Title>{title}</S.Title>
        <S.Contents>{contents}</S.Contents>
        <S.SelectOptionContainer $odd={options.length % 2 === 1}>
          {options.map((option) => (
            <SelectOption key={option.id} {...option} />
          ))}
        </S.SelectOptionContainer>
      </S.TopicTop>
      <S.TopicBottom>
        <S.AuthorInfo>
          <S.Profile src={member.profileImage} alt={member.nickname} />
          <span>{member.nickname}</span>
        </S.AuthorInfo>
        <S.TopicInfoContainer>
          <S.TopicInfo>
            <Icon name="HandsUp" size={16} />
            {('00' + participation).slice(-3)}명 참여
          </S.TopicInfo>
          ·
          <S.TopicInfo>
            <Icon name="Bubble" size={16} />
            {('00' + comments).slice(-3)}명 참여
          </S.TopicInfo>
        </S.TopicInfoContainer>
      </S.TopicBottom>
    </S.Container>
  );
};

export default TopicCard;
