import { useMutation } from '@tanstack/react-query';

import { VoteRequest, vote } from '@src/apis';

export const useVote = () => {
  const mutation = useMutation((data: VoteRequest) => vote(data));

  return {
    ...mutation,
    vote: mutation.mutate,
  };
};
