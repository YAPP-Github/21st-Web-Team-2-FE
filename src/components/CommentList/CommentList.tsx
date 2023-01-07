import React, { FC, MouseEvent, useState } from 'react';

import CommentListItem from '@src/components/CommentList/CommentListItem';
import { IComment } from '@src/types/Comment';

import * as S from './CommentList.style';

type TOrder = 'latest' | 'popular';

interface Props {
  comments: IComment[];
}
const CommentList: FC<Props> = (props) => {
  const { comments: _comments } = props;

  const [comments, setComments] = useState(_comments);
  const [order, setOrder] = useState<TOrder>('latest');

  const handleClickOrderItem = (e: MouseEvent<HTMLButtonElement>) => {
    const name = e.currentTarget.name as TOrder;
    setOrder(name);
  };

  const handleCommentUpdateLike = (commentId: IComment['commentId']) => {
    const updatedComment = comments.map((item) => {
      if (item.commentId !== commentId) return item;

      const isLike = item.liked;
      return {
        ...item,
        liked: !isLike,
        likeAmount: isLike ? item.likeAmount - 1 : item.likeAmount + 1,
      };
    });

    setComments(updatedComment);
  };

  const commentList = getCommentByOrder(comments, order);

  return (
    <S.Wrapper>
      <S.CommentHeader>
        <S.CommentLength>댓글 {comments.length}개</S.CommentLength>
        <S.Menu>
          <S.MenuItem name="latest" $active={order === 'latest'} onClick={handleClickOrderItem}>
            최신순
          </S.MenuItem>
          <S.MenuItem name="popular" $active={order === 'popular'} onClick={handleClickOrderItem}>
            좋아요순
          </S.MenuItem>
        </S.Menu>
      </S.CommentHeader>
      <S.CommentList>
        {commentList.map((value) => (
          <CommentListItem key={value.commentId} comment={value} onClickLike={handleCommentUpdateLike} />
        ))}
      </S.CommentList>
    </S.Wrapper>
  );
};

function getCommentByOrder(comment: IComment[], order: TOrder) {
  if (order === 'latest') return comment;

  const tempComment = comment.slice();
  return tempComment.sort((a, b) => b.likeAmount - a.likeAmount);
}

export default CommentList;
