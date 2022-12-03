import React from 'react';

import * as S from './VoteListItem.styles';

interface User {
  profile: string;
  nickname: string;
}

export interface VoteListItemProps {
  badge: string;
  title: string;
  user: User;
  participants: number;
  comments: number;
}

const VoteListItem: React.FC<VoteListItemProps> = (props) => {
  const { badge, title, user, participants, comments } = props;

  return (
    <S.VoteListItem>
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
    </S.VoteListItem>
  );
};

export default VoteListItem;
