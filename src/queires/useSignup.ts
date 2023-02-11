import { useMutation } from '@tanstack/react-query';

import { signup } from '@src/apis';
import { Onboarding } from '@src/pages/onboarding/index.page';

export const useSignup = (authCode: string) => {
  const mutation = useMutation((onboarding: Onboarding) => signup(authCode, onboarding));

  return {
    ...mutation,
    signup: mutation.mutate,
  };
};
