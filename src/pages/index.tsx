import type { NextPage } from 'next';

import { MEMBER } from '@mocks/data/member';
import { TOPICS } from '@mocks/data/topic';

import DefaultLayout from '@src/components/common/DefaultLayout';
import Main from '@src/components/main/Main';
import SideMenu from '@src/components/main/SideMenu';

const Home: NextPage = () => {
  return (
    <DefaultLayout //
      side={<SideMenu />}
      main={<Main member={MEMBER} popularTopics={TOPICS} />}
    />
  );
};

export default Home;
