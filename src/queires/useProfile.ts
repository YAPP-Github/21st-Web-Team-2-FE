import { useQuery } from '@tanstack/react-query';

import { GetProfileResponse, getProfile } from '@src/apis';
import { queryKeys } from '@src/queires/constant';

const useProfile = (token = '') => {
  const result = useQuery<GetProfileResponse>([queryKeys.profile, token], () => getProfile(token), {
    enabled: !!token,
  });

  return {
    ...result,
    data: result.data?.data,
  };
};

export default useProfile;
