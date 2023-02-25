import React, { FC, useState } from 'react';

import { LikeCommentResponseData } from '@src/apis';
import ProfileImg from '@src/components/common/ProfileImg';
import useAuthCheck from '@src/hooks/useAuthCheck';
import useLikeComment from '@src/queires/useLikeComment';
import Comment from '@src/types/Comment';

import * as S from './CommentListItem.styles';

interface Props {
  comment: Comment;
}
const CommentListItem: FC<Props> = (props) => {
  const { comment } = props;
  const { commentId, contents, likeAmount, liked, member } = comment;

  const [likes, setLikes] = useState<number>(likeAmount);
  const [like, setLike] = useState<boolean>(liked);

  const checkAuth = useAuthCheck();
  const { likeComment } = useLikeComment();

  const handleLike = async () => {
    const result = await checkAuth<LikeCommentResponseData>(() => likeComment({ commentId }));
    if (!result) return;

    setLikes((prev) => prev + (result.liked ? 1 : -1));
    setLike(result.liked);
  };

  return (
    <S.Wrapper>
      <ProfileImg jobCategory={member.jobCategory} size={44} />
      <S.Content>
        <S.UserWrapper>
          <S.UserNickName>{member.nickname}</S.UserNickName>
          <S.UserInfo>
            {member.jobCategory}·{member.workingYears}
          </S.UserInfo>
        </S.UserWrapper>
        <S.Comment>{contents}</S.Comment>
        <S.LikeWrapper $liked={like} onClick={handleLike}>
          <S.LikeIcon name="Vote" size={16} /> {likes}
        </S.LikeWrapper>
      </S.Content>
    </S.Wrapper>
  );
};

export default CommentListItem;
