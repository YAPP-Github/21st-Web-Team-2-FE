import React, { FC } from 'react';

import * as S from './CommentListItem.styles';

const CommentListItem: FC = () => {
  return (
    <S.Wrapper>
      <S.Avatar />
      <S.Content>
        <S.UserWrapper>
          <S.UserNickName>닉네임</S.UserNickName>
          <S.UserInfo>분야·연차</S.UserInfo>
        </S.UserWrapper>
        <S.Comment>
          사회적 특수계급의 제도는 인정되지 아니하며, 어떠한 형태로도 이를 창설할 수 없다. 모든 국민은 행위시의 법률에
          의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다.
        </S.Comment>
        <S.VoteWrapper>
          <S.VoteIcon name="Vote" size={16} /> 12
        </S.VoteWrapper>
      </S.Content>
    </S.Wrapper>
  );
};

export default CommentListItem;
