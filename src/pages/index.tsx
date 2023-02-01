import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';

import { MEMBER } from '@mocks/data/member';

import { GetPopularTopicsResponseData, getPopularTopics } from '@src/apis';
import DefaultLayout from '@src/components/common/DefaultLayout';
import Main from '@src/components/main/Main';
import SideMenu from '@src/components/main/SideMenu';

interface HomeProps {
  popularTopics: GetPopularTopicsResponseData[];
}

const Home: NextPage<HomeProps> = ({ popularTopics }) => {
  return (
    <DefaultLayout //
      side={<SideMenu />}
      main={<Main member={MEMBER} popularTopics={popularTopics} />}
    />
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const popularTopics = await getPopularTopics();

  return { props: { popularTopics } };
};

export default Home;
