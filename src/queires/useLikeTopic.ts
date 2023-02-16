import { useMutation } from '@tanstack/react-query';

import { LikeTopicRequest, likeTopic } from '@src/apis';

const useLikeTopic = () => {
  const mutation = useMutation((data: LikeTopicRequest) => likeTopic(data));

  return {
    ...mutation,
    likeTopic: mutation.mutateAsync,
  };
};

export default useLikeTopic;
