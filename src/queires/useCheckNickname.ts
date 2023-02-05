import { useMutation } from '@tanstack/react-query';

import { checkNickName } from '@src/apis';

export const useCheckNickname = () => {
  const mutation = useMutation((nickname: string) => checkNickName(nickname));

  return {
    ...mutation,
    checkNickName: mutation.mutate,
  };
};
