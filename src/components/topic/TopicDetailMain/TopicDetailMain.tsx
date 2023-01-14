import { FC } from 'react';

import { Topic } from '@src/apis';
import TopicCard from '@src/components/common/TopicCard';
import CommentForm from '@src/components/topic/CommentForm';
import CommentList from '@src/components/topic/CommentList';
import { useCreateComments } from '@src/queires/useCreateComment';

import * as S from './TopicDetailMain.styles';

interface Props {
  topic: Topic;
}
const TopicDetailMain: FC<Props> = (props) => {
  const { topic } = props;

  const { mutateComment } = useCreateComments(1);

  const handleAddComment = async (commentValue: string) => {
    const comment = {
      commentId: Math.floor(Math.random() * 100),
      member: {
        id: 3,
        name: 'MemberC',
        profileImage: null,
        jobCategory: 'product_manager',
        workingYears: 1,
      },
      commentContent: commentValue,
      likeAmount: 30,
      liked: false,
    };

    mutateComment.mutate(comment);
  };

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
