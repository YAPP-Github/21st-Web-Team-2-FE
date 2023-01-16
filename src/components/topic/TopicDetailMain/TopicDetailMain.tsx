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

  const { mutateComment } = useCreateComments(topic.topicId);

  const handleAddComment = (commentValue: string) => {
    mutateComment.mutate(commentValue);
  };

  const { title, contents, commentAmount, voteOptions } = topic;
  return (
    <S.Wrapper>
      <S.TopicCardWrapper>
        <S.ShareIcon name="Share" size={24} />
        <TopicCard title={title} contents={contents} options={voteOptions} comments={commentAmount} type={'detail'} />
      </S.TopicCardWrapper>
      <CommentForm placeholder="닉네임님, 댓글을 남겨보세요! 💬" onSubmit={handleAddComment} />
      <CommentList />
    </S.Wrapper>
  );
};

export default TopicDetailMain;
