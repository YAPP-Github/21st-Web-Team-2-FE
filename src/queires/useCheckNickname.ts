import { useMutation } from '@tanstack/react-query';

import { checkNickName } from '@src/apis';

export const useCheckNickname = () => {
  const mutateCheckNickName = useMutation((nickname: string) => checkNickName(nickname));

  return {
    mutateCheckNickName,
  };
};
