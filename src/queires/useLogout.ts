import { useMutation } from '@tanstack/react-query';

import { logout } from '@src/apis';

export const useLogout = () => {
  const mutation = useMutation((refreshToken: string) => logout(refreshToken));

  return {
    ...mutation,
    logout: mutation.mutate,
  };
};
