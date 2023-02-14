import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import { useState } from 'react';

import { GetPopularTopicsResponseData, getPopularTopics } from '@src/apis';
import DefaultLayout from '@src/components/common/DefaultLayout';
import Main from '@src/components/main/Main';
import SideMenu from '@src/components/main/SideMenu';
import { MenuCategory } from '@src/components/main/SideMenu/SideMenu';

interface HomeProps {
  popularTopics: GetPopularTopicsResponseData[];
}

const Home: NextPage<HomeProps> = ({ popularTopics }) => {
  const [category, setCategory] = useState<MenuCategory>(null);

  return (
    <DefaultLayout //
      side={<SideMenu onSelectCategory={setCategory} />}
      main={<Main category={category} popularTopics={popularTopics} />}
    />
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const popularTopics = await getPopularTopics();

  return { props: { popularTopics } };
};

export default Home;
