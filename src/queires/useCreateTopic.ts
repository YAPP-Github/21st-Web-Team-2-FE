import { useMutation } from '@tanstack/react-query';

import { PostTopicRequest, createTopic } from '@src/apis';

const useCreateTopic = () => {
  const mutation = useMutation((data: PostTopicRequest) => createTopic(data));

  return {
    ...mutation,
    createTopic: mutation.mutateAsync,
  };
};

export default useCreateTopic;
