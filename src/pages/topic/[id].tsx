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
  const id = context.query.id;
  if (id && typeof id === 'string' && Number(id)) {
    const topicId = Number(id);

    // THINK-GYU: topic 카드 select를 어떻게 처리할지에 따라 해당 부분이 달라짐
    let topicDetail = await getTopicDetail(topicId);
    if (topicDetail) {
      topicDetail = {
        ...topicDetail,
        voteOptions: topicDetail.voteOptions.map((item, idx) => ({ ...item, id: idx + 1 })),
      };
    }

    return { props: { topicDetail } };
  }

  return { props: {} };
};

export default TopicDetail;
