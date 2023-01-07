import React, { FC, MouseEvent, useEffect, useState } from 'react';

import CommentListItem from '@src/components/CommentList/CommentListItem';
import { IComment } from '@src/types/Comment';

import * as S from './CommentList.style';

type OrderType = 'latest' | 'popular';

interface Props {
  comments: IComment[];
}
const CommentList: FC<Props> = (props) => {
  const { comments: _comments } = props;

  const [comments, setComments] = useState(_comments);
  const [order, setOrder] = useState<OrderType>('latest');

  // DELETE-GYU: API 연동시 제거될 로직
  useEffect(() => {
    setComments(_comments);
  }, [_comments]);

  const handleClickOrderItem = (e: MouseEvent<HTMLButtonElement>) => {
    const name = e.currentTarget.name as OrderType;
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
  const subTitle = `댓글과 좋아요는 Thumbs UP과 Finger님들에게\n 큰 힘이 됩니다.`;

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
        {commentList.length > 0 ? (
          commentList.map((value) => (
            <CommentListItem key={value.commentId} comment={value} onClickLike={handleCommentUpdateLike} />
          ))
        ) : (
          <S.EmptyCommentList>
            <S.EmptyCommentTitle>여러분의 의견과 생각을 댓글로 표현해주세요!</S.EmptyCommentTitle>
            <S.EmptyCommentSubTitle>{subTitle}</S.EmptyCommentSubTitle>
          </S.EmptyCommentList>
        )}
      </S.CommentList>
    </S.Wrapper>
  );
};

function getCommentByOrder(comment: IComment[], order: OrderType) {
  if (order === 'latest') return comment;

  const tempComment = comment.slice();
  return tempComment.sort((a, b) => b.likeAmount - a.likeAmount);
}

export default CommentList;
