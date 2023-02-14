import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import { PostTopicRequest } from '@src/apis';
import Header from '@src/components/common/Header';
import WriteMain from '@src/components/write/WriteMain';
import useCreateTopic from '@src/queires/useCreateTopic';
import $userSession from '@src/recoil/userSession';

const WritePage: NextPage = () => {
  const { createTopic } = useCreateTopic();
  const tokens = useRecoilValue($userSession);
  const router = useRouter();

  useEffect(() => {
    if (tokens) return;
    alert('로그인이 필요합니다!');
    router.push('/login');
  }, [router, tokens]);

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
