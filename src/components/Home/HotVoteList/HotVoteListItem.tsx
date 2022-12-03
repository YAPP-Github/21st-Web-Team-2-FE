import React from 'react';

import { HotVote } from '@src/types/vote';

import * as S from './HotVoteListItem.styles';

export interface VoteListItemProps {
  hotVote: HotVote;
}

const HotVoteListItem: React.FC<VoteListItemProps> = (props) => {
  const { hotVote } = props;
  const { badge, title, user, participants, comments } = hotVote;

  return (
    <S.Container>
      <S.Badge>{badge}</S.Badge>
      <S.Title>{title}</S.Title>
      <S.VoteInfo>
        <S.UserInfo>
          <S.Profile src={user.profile} alt={user.nickname} width={28} height={28} />
          {user.nickname}
        </S.UserInfo>
        <div>
          {participants}명 참여 ·{comments}개 댓글
        </div>
      </S.VoteInfo>
    </S.Container>
  );
};

export default HotVoteListItem;
