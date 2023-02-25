import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { PostTopicRequest } from '@src/apis';
import Header from '@src/components/common/Header';
import WriteMain from '@src/components/write/WriteMain';
import useAuthCheck from '@src/hooks/useAuthCheck';
import useCreateTopic from '@src/queires/useCreateTopic';

const WritePage: NextPage = () => {
  const { createTopic } = useCreateTopic();

  const checkAuth = useAuthCheck();
  const router = useRouter();

  const isNotAuth = !checkAuth();
  if (isNotAuth) {
    router.push('/');
    return null;
  }

  const handleCreate = async (topic: PostTopicRequest) => {
    await createTopic(topic);
    await router.push('/');
  };

  return (
    <>
      <Header />
      <WriteMain onSubmit={handleCreate} />
    </>
  );
};

export default WritePage;
