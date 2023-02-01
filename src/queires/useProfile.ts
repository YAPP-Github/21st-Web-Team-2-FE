import { useQuery } from '@tanstack/react-query';

import { GetProfileResponse, getProfile } from '@src/apis';
import { queryKeys } from '@src/queires/constant';

const useProfile = (token: string) => {
  const result = useQuery<GetProfileResponse>([queryKeys.profile, token], () => getProfile(token));

  return {
    ...result,
    data: result.data?.data,
  };
};

export default useProfile;
