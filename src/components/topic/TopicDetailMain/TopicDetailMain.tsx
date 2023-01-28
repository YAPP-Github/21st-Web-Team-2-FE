import { FC } from 'react';

import ShareIcon from '@src/components/common/ShareIcon';
import TopicCard from '@src/components/common/TopicCard';
import CommentForm from '@src/components/topic/CommentForm';
import CommentList from '@src/components/topic/CommentList';
import { useCreateComments } from '@src/queires/useCreateComment';
import Topic from '@src/types/Topic';

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

  return (
    <S.Wrapper>
      <S.TopicCardWrapper>
        <S.ShareIcon>
          <ShareIcon url={location.href} />
        </S.ShareIcon>
        <TopicCard {...topic} type="detail" />
      </S.TopicCardWrapper>
      <CommentForm placeholder="닉네임님, 댓글을 남겨보세요! 💬" onSubmit={handleAddComment} />
      <CommentList />
    </S.Wrapper>
  );
};

export default TopicDetailMain;
