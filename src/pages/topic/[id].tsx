import type { GetServerSideProps, NextPage } from 'next';

import { Topic, getTopicDetail } from '@src/apis';
import DefaultLayout from '@src/components/common/DefaultLayout';
import TopicDetailMain from '@src/components/topic/TopicDetailMain';
import TopicUserInfo from '@src/components/topic/TopicUserInfo';

interface Props {
  topicDetail: Topic;
}
const TopicDetail: NextPage<Props> = ({ topicDetail }) => {
  const { member, tags } = topicDetail;

  return (
    <DefaultLayout //
      side={<TopicUserInfo member={member} tags={tags} />}
      main={<TopicDetailMain topic={topicDetail} />}
    />
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const topicId = Number(context.query.id);
  if (topicId) {
    const topicDetail = await getTopicDetail(topicId);

    return { props: { topicDetail } };
  }

  return { props: {} };
};

export default TopicDetail;
