import type { NextPage } from 'next';

import { MEMBER } from '@mocks/data/member';
import { TOPICS } from '@mocks/data/topics';

import DefaultLayout from '@src/components/DefaultLayout';
import MainTopicList from '@src/components/MainTopicList';
import SideMenu from '@src/components/SideMenu';

const Home: NextPage = () => {
  return (
    <DefaultLayout //
      side={<SideMenu />}
      main={<MainTopicList member={MEMBER} topics={TOPICS} />}
    />
  );
};

export default Home;
