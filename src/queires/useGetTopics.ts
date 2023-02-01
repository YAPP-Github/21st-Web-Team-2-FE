import { useInfiniteQuery } from '@tanstack/react-query';

import { GetTopicsResponse, getTopics } from '@src/apis';

import { queryKeys } from './constant';

export const useGetTopics = () => {
  const result = useInfiniteQuery<GetTopicsResponse>([queryKeys.topics], ({ pageParam }) => getTopics(pageParam), {
    getNextPageParam: (lastPage) => lastPage.offsetId ?? undefined,
  });

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
