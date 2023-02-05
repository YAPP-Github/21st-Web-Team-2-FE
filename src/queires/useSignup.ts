import { useMutation } from '@tanstack/react-query';

import { signup } from '@src/apis';
import { Onboarding } from '@src/pages/onboarding';

export const useSignup = () => {
  const mutation = useMutation((onboarding: Onboarding) => signup(onboarding));

  return {
    ...mutation,
    signup: mutation.mutate,
  };
};
