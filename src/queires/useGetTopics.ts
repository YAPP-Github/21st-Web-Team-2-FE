import { useInfiniteQuery } from '@tanstack/react-query';

import { GetTopicsQuery, GetTopicsResponse, getTopics } from '@src/apis';

import { queryKeys } from './constant';

export const useGetTopics = (category: GetTopicsQuery['category']) => {
  const result = useInfiniteQuery<GetTopicsResponse>(
    [queryKeys.topics, category],
    ({ pageParam }) => getTopics({ category, offsetId: pageParam }),
    {
      getNextPageParam: (lastPage) => lastPage.offsetId,
    },
  );

  const { data } = result;

  const topics = data
    ? data.pages
        .map((page) => page.data)
        .reduce((mergedContents, currentContents) => [...(mergedContents || []), ...(currentContents || [])], [])
    : [];

  return {
    ...result,
    data: topics,
  };
};
