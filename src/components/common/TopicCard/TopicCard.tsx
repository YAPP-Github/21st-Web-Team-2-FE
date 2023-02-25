import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';

import { LikeTopicResponseData } from '@src/apis';
import ProfileImg from '@src/components/common/ProfileImg';
import ShareIcon from '@src/components/common/ShareIcon';
import { JOB_CATEGORIES } from '@src/components/common/TopicCard/VoteStatistics';
import useAuthCheck from '@src/hooks/useAuthCheck';
import useLikeTopic from '@src/queires/useLikeTopic';
import useMember from '@src/queires/useMember';
import { useVote } from '@src/queires/useVote';
import $userSession from '@src/recoil/userSession';
import Topic from '@src/types/Topic';
import VoteOption from '@src/types/VoteOption';

import Icon from '../Icon';
import SelectOption from './SelectOption';
import * as S from './TopicCard.styles';

export type TopicCardType = 'feed' | 'detail';

export interface TopicCardProps extends Omit<Topic, 'tags' | 'liked' | 'likeAmount'> {
  liked?: boolean;
  likeAmount?: number;
  badge?: string; // TODO: Icon등의 형태 논의 필요
  type: TopicCardType;
  onClick?: () => void;
}

const TopicCard = (props: TopicCardProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const { topicId, title, contents, voteOptions, member, commentAmount, liked, likeAmount, badge, type, onClick } =
    props;
  const { vote } = useVote();
  const { likeTopic } = useLikeTopic();
  const checkAuth = useAuthCheck();
  const userSession = useRecoilValue($userSession);
  const { data: loginMember } = useMember(userSession?.accessToken);

  const [like, setLike] = useState<boolean>(!!liked);
  const [likes, setLikes] = useState<number>(likeAmount || 0);
  const [options, setOptions] = useState<VoteOption[]>(voteOptions);
  const selectedOption = options.find((option) => option.voted);
  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(selectedOption?.voteOptionId || null);
  const votedAmount = options.reduce((prev, option) => prev + option.voteAmount, 0);

  const isFeed = type === 'feed';

  const handleLike = async () => {
    const result = await checkAuth<LikeTopicResponseData>(() => likeTopic({ topicId }));
    if (!result) return;

    setLikes((prev) => prev + (result.liked ? 1 : -1));
    setLike(result.liked);
  };

  const handleClickOption = async (voteOptionId: number) => {
    const result = await checkAuth(() => vote({ topicId, voteOptionId }));
    if (!result || !loginMember) return;

    const currentCategory = JOB_CATEGORIES[loginMember.jobCategory].key || JOB_CATEGORIES.ETC.key;

    const changed = options.map((option) => {
      if (option.voteOptionId === selectedOptionId) {
        option.votedAmountStatistics && (option.votedAmountStatistics[currentCategory] -= 1);
        option.voteAmount -= 1;
        return option;
      }
      if (option.voteOptionId === voteOptionId) {
        option.votedAmountStatistics && (option.votedAmountStatistics[currentCategory] += 1);
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
          {isFeed && <ShareIcon url={`${location.host}/topic/${topicId}`} />}
        </S.TopicHeader>
        <S.Contents>{contents}</S.Contents>
        <S.SelectOptionContainer $odd={options.length % 2 === 1}>
          {options.map((option) => (
            <SelectOption
              key={option.voteOptionId}
              {...option}
              type={type}
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
