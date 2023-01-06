import React, { useState } from 'react';

import Topic, { TopicOption } from '@src/types/Topic';

import Icon from '../common/Icon';
import SelectOption from './SelectOption';
import * as S from './TopicCard.style';

interface TopicCardProps extends Topic {
  badge?: string;
}

const TopicCard = (props: TopicCardProps) => {
  const { title, contents, options: defaultOptions, member, participant: defaultParticipant, comments } = props;
  const [options, setOptions] = useState<TopicOption[]>(defaultOptions);
  const [participant, setParticipant] = useState<number>(defaultParticipant);
  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null); // TODO: 초기 선택 여부 확인해야함

  const handleClickOption = (id: number) => {
    const changed = options.map((option) => {
      if (option.id === selectedOptionId) {
        option.voters -= 1;
        return option;
      }
      if (option.id === id) {
        option.voters += 1;
      }
      return option;
    });
    setOptions(changed);
    setSelectedOptionId(id);

    if (selectedOptionId === id) {
      setParticipant((prev) => prev - 1);
      setSelectedOptionId(null);
    }
    if (selectedOptionId === null) {
      setParticipant((prev) => prev + 1);
    }
  };

  return (
    <S.Container>
      <S.TopicTop>
        <S.TopicHeader>
          <S.Title>{title}</S.Title>
          <Icon name="Share" />
        </S.TopicHeader>
        <S.Contents>{contents}</S.Contents>
        <S.SelectOptionContainer $odd={options.length % 2 === 1}>
          {options.map((option) => (
            <SelectOption
              key={option.id}
              {...option}
              rate={option.voters / participant}
              result={selectedOptionId !== null}
              selected={selectedOptionId === option.id}
              onClick={handleClickOption}
            />
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
            {('00' + participant).slice(-3)}명 참여
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
