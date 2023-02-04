import { useMutation } from '@tanstack/react-query';

import { signup } from '@src/apis';
import { Onboarding } from '@src/pages/onboarding';

export const useSignup = () => {
  const mutateSignup = useMutation((onboarding: Onboarding) => signup(onboarding));

  return {
    mutateSignup,
  };
};
