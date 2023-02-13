import { UseQueryOptions, useQuery } from '@tanstack/react-query';

import { GetMemberResponse, getMember } from '@src/apis';
import { queryKeys } from '@src/queires/constant';

const useMember = (token = '', options?: UseQueryOptions<GetMemberResponse>) => {
  const result = useQuery<GetMemberResponse>([queryKeys.profile, token], getMember, {
    ...options,
    enabled: !!token,
  });

  return {
    ...result,
    data: result.data?.data,
  };
};

export default useMember;
