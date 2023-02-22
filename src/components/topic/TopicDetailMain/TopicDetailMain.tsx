import { FC } from 'react';
import { useRecoilValue } from 'recoil';

import ShareIcon from '@src/components/common/ShareIcon';
import TopicCard from '@src/components/common/TopicCard';
import CommentForm from '@src/components/topic/CommentForm';
import CommentList from '@src/components/topic/CommentList';
import { useCreateComments } from '@src/queires/useCreateComment';
import useMember from '@src/queires/useMember';
import $userSession from '@src/recoil/userSession';
import Topic from '@src/types/Topic';

import * as S from './TopicDetailMain.styles';

interface Props {
  topic: Topic;
}

const TopicDetailMain: FC<Props> = (props) => {
  const { topic } = props;

  const { createComments } = useCreateComments();
  const userSession = useRecoilValue($userSession);
  const { data: member } = useMember(userSession?.accessToken);

  const handleAddComment = (commentValue: string) => {
    createComments({
      topicId: topic.topicId,
      contents: commentValue,
    });
  };

  const isLogin = !!userSession;

  return (
    <S.Wrapper>
      <S.TopicCardWrapper>
        <S.ShareIcon>
          <ShareIcon url={location.href} />
        </S.ShareIcon>
        <TopicCard {...topic} type="detail" />
      </S.TopicCardWrapper>
      <CommentForm
        placeholder={
          isLogin ? `${member?.nickname}님, 댓글을 남겨보세요! 💬` : '유저님, 로그인하고 댓글을 남겨보세요! 💬'
        }
        onSubmit={handleAddComment}
        disabled={!isLogin}
      />
      <CommentList />
    </S.Wrapper>
  );
};

export default TopicDetailMain;
