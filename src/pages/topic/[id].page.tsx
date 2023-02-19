import type { GetServerSideProps, NextPage } from 'next';

import { getTopicDetail } from '@src/apis';
import DefaultLayout from '@src/components/common/DefaultLayout';
import SEO from '@src/components/common/SEO';
import TopicDetailMain from '@src/components/topic/TopicDetailMain';
import TopicUserInfo from '@src/components/topic/TopicUserInfo';
import Topic from '@src/types/Topic';

interface Props {
  topicDetail: Topic;
  error: boolean;
}

const TopicDetail: NextPage<Props> = ({ topicDetail, error }) => {
  // GYU-TODO: ErrorPage UI 에 따라 달라짐
  if (error) {
    return (
      <DefaultLayout //
        side={null}
        main={<div>Error Page</div>}
      />
    );
  }

  const { member, tags } = topicDetail;

  return (
    <>
      <SEO title={`${topicDetail.title} | 텀즈업`} description={topicDetail.title} />
      <DefaultLayout //
        side={<TopicUserInfo member={member} tags={tags} />}
        main={<TopicDetailMain topic={topicDetail} />}
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const topicId = Number(context.query.id);
  if (topicId) {
    try {
      const topicDetail = await getTopicDetail(topicId);

      return { props: { topicDetail } };
    } catch (error) {
      return { props: { topicDetail: null, error: true } };
    }
  }

  return { props: { topicDetail: null, error: true } };
};

export default TopicDetail;
