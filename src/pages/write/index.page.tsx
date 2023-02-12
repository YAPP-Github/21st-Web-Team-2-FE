import type { NextPage } from 'next';

import Header from '@src/components/common/Header';
import WriteMain from '@src/components/write/WriteMain';
import useCreateTopic from '@src/queires/useCreateTopic';

const WritePage: NextPage = () => {
  const { createTopic } = useCreateTopic();

  return (
    <>
      <Header />
      <WriteMain onSubmit={createTopic} />
    </>
  );
};

export default WritePage;
