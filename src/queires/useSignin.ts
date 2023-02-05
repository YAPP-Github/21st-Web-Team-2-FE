import { useMutation } from '@tanstack/react-query';

import { signin } from '@src/apis';

export const useSignin = () => {
  const mutation = useMutation((authCode: string) => signin(authCode));

  return {
    ...mutation,
    signin: mutation.mutate,
  };
};
