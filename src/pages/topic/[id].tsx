import { member, tags, topic } from '__mocks__/data/topic';
import type { NextPage } from 'next';

import DefaultLayout from '@src/components/DefaultLayout';
import TopicDetailMain from '@src/components/TopicDetailMain';
import TopicUserInfo from '@src/components/TopicUserInfo';

// TODO-GYU: SSR, SSG 등 방식 고려해서 추가하기
// 현재는 mockData 를 그대로 렌더링함.

const TopicDetail: NextPage = () => {
  return (
    <>
      <DefaultLayout //
        side={<TopicUserInfo member={member} tags={tags} />}
        main={<TopicDetailMain topic={topic} />}
      />
    </>
  );
};

export default TopicDetail;
