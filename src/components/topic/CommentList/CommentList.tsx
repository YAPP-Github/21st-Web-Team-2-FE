import { useRouter } from 'next/router';
import React, { FC, MouseEvent, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import CommentListItem from '@src/components/topic/CommentList/CommentListItem';
import { useGetComments } from '@src/queires/useGetComments';
import Comment from '@src/types/Comment';

import * as S from './CommentList.style';

type OrderType = 'latest' | 'popular';

const CommentList: FC = () => {
  const router = useRouter();

  const [order, setOrder] = useState<OrderType>('latest');

  const { fetchNextPage, data: comments = [], isLoading, hasNextPage } = useGetComments(Number(router.query.id));
  const { ref } = useInView({
    onChange: (inView) => {
      if (inView && hasNextPage) {
        fetchNextPage();
      }
    },
  });

  const handleClickOrderItem = (e: MouseEvent<HTMLButtonElement>) => {
    const name = e.currentTarget.name as OrderType;
    setOrder(name);
  };

  if (isLoading) return null;

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
          commentList.map((value) => <CommentListItem key={value.commentId} comment={value} />)
        ) : (
          <S.EmptyCommentList>
            <S.EmptyCommentTitle>여러분의 의견과 생각을 댓글로 표현해주세요!</S.EmptyCommentTitle>
            <S.EmptyCommentSubTitle>{subTitle}</S.EmptyCommentSubTitle>
          </S.EmptyCommentList>
        )}
        <div ref={ref} />
      </S.CommentList>
    </S.Wrapper>
  );
};

function getCommentByOrder(comment: Comment[], order: OrderType) {
  if (order === 'latest') return comment;

  const tempComment = comment.slice();
  return tempComment.sort((a, b) => b.likeAmount - a.likeAmount);
}

export default CommentList;
