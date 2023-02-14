import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';

import { ErrorResponse } from '@src/apis';
import ProfileImg from '@src/components/common/ProfileImg';
import ShareIcon from '@src/components/common/ShareIcon';
import useLike from '@src/queires/useLike';
import { useVote } from '@src/queires/useVote';
import $userSession from '@src/recoil/userSession';
import Topic from '@src/types/Topic';
import VoteOption from '@src/types/VoteOption';

import Icon from '../Icon';
import SelectOption from './SelectOption';
import * as S from './TopicCard.styles';

export type TopicCardType = 'feed' | 'detail';

export interface TopicCardProps extends Omit<Topic, 'tags'> {
  badge?: string; // TODO: Icon등의 형태 논의 필요
  type: TopicCardType;
  onClick?: () => void;
}

const TopicCard = (props: TopicCardProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const {
    topicId,
    title,
    contents,
    voteOptions: defaultOptions,
    member,
    commentAmount,
    liked,
    likeAmount,
    badge,
    type,
    onClick,
  } = props;
  const tokens = useRecoilValue($userSession);
  const router = useRouter();
  const { vote } = useVote();
  const { like: doLike } = useLike();

  const [like, setLike] = useState<boolean>(liked);
  const [likes, setLikes] = useState<number>(likeAmount || 0);
  const [options, setOptions] = useState<VoteOption[]>(defaultOptions);
  const selectedOption = options.find((option) => option.voted);
  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(selectedOption?.voteOptionId || null);
  const votedAmount = options.reduce((prev, option) => prev + option.voteAmount, 0);

  const isFeed = type === 'feed';

  const handleLike = async () => {
    if (!tokens) {
      alert('로그인이 필요합니다!');
      await router.push('/login');
      return;
    }

    try {
      await doLike({ topicId });
    } catch (err) {
      const error = err as AxiosError<ErrorResponse>;
      const code = error.response?.data.code;
      if (!code?.startsWith('2')) return;

      alert('로그인이 필요합니다!');
      await router.push('/login');
      return;
    }

    setLikes((prev) => prev + (like ? -1 : +1));
    setLike((prev) => !prev);
  };

  const handleClickOption = async (voteOptionId: number) => {
    if (!tokens) {
      alert('로그인이 필요합니다!');
      await router.push('/login');
      return;
    }

    try {
      await vote({
        topicId,
        voteOptionId,
      });
    } catch (err) {
      // TODO: 에러핸들링 추가 필요
      alert('로그인이 필요합니다!');
      await router.push('/login');
      return;
    }

    const changed = options.map((option) => {
      if (option.voteOptionId === selectedOptionId) {
        option.voteAmount -= 1;
        return option;
      }
      if (option.voteOptionId === voteOptionId) {
        option.voteAmount += 1;
      }
      return option;
    });
    setOptions(changed);
    setSelectedOptionId(voteOptionId);

    if (selectedOptionId === voteOptionId) {
      setSelectedOptionId(null);
    }
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
          {isFeed && <ShareIcon url={`${location.host}/topics/${topicId}`} />}
        </S.TopicHeader>
        <S.Contents>{contents}</S.Contents>
        <S.SelectOptionContainer $odd={options.length % 2 === 1}>
          {options.map((option) => (
            <SelectOption
              key={option.voteOptionId}
              {...option}
              rate={option.voteAmount / votedAmount}
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
            <ProfileImg src={member.profileImage} jobCategory={member.jobCategory} />
            <span>{member.nickname}</span>
          </S.AuthorInfo>
        ) : (
          <S.LikeBtn $like={like} onClick={handleLike}>
            <Icon name="Clap" color={like ? 'Primary1' : 'G7'} size={24} fill="G3" />
            <span>좋아요 {like && likes}</span>
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
