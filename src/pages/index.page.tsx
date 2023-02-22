import type { GetServerSidePropsContext, NextPage } from 'next';
import { GetServerSideProps } from 'next';
import { useState } from 'react';

import { GetPopularTopicsResponseData, getPopularTopics } from '@src/apis';
import DefaultLayout from '@src/components/common/DefaultLayout';
import SEO from '@src/components/common/SEO';
import Main from '@src/components/main/Main';
import SideMenu from '@src/components/main/SideMenu';
import { MenuCategory } from '@src/components/main/SideMenu/SideMenu';
import { getTokens } from '@src/utils/auth';

interface HomeProps {
  popularTopics: GetPopularTopicsResponseData[];
}

const Home: NextPage<HomeProps> = ({ popularTopics }) => {
  const [category, setCategory] = useState<MenuCategory>(null);

  return (
    <>
      <SEO title="IT 직무 관련자들을 위한 투표 커뮤니티 웹 플랫폼 | 텀즈업" description="www.thumbs-up.me" />
      <DefaultLayout //
        side={<SideMenu onSelectCategory={setCategory} />}
        main={<Main category={category} popularTopics={popularTopics} />}
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const tokens = getTokens(context.req.headers.cookie);
  const popularTopics = await getPopularTopics(tokens?.accessToken);

  return { props: { popularTopics } };
};

export default Home;
