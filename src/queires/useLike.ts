import { useMutation } from '@tanstack/react-query';

import { LikeRequest, like } from '@src/apis';

const useLike = () => {
  const mutation = useMutation((data: LikeRequest) => like(data));

  return {
    ...mutation,
    like: mutation.mutateAsync,
  };
};

export default useLike;
