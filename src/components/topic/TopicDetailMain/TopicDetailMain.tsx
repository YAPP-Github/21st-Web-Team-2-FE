import { FC, useState } from 'react';

import { commentArr } from '@mocks/data/comment';

import { Topic } from '@src/apis';
import TopicCard from '@src/components/common/TopicCard';
import CommentForm from '@src/components/topic/CommentForm';
import CommentList from '@src/components/topic/CommentList';

import * as S from './TopicDetailMain.styles';

interface Props {
  topic: Topic;
}
const TopicDetailMain: FC<Props> = (props) => {
  const { topic } = props;

  const handleAddComment = (commentValue: string) => {};

  const { title, contents, member, commentAmount, voteOptions } = topic;
  return (
    <S.Wrapper>
      <S.TopicCardWrapper>
        <S.ShareIcon name="Share" size={24} />
        <TopicCard
          title={title}
          contents={contents}
          options={voteOptions}
          member={{
            id: member.id,
            nickname: member.name,
            jobCategory: member.jobCategory,
            profileImage: member.profileImage ?? '',
          }}
          comments={commentAmount}
          type={'detail'}
        />
      </S.TopicCardWrapper>
      <CommentForm placeholder="닉네임님, 댓글을 남겨보세요! 💬" onSubmit={handleAddComment} />
      <CommentList />
    </S.Wrapper>
  );
};

export default TopicDetailMain;
