import { useInfiniteQuery } from '@tanstack/react-query';

import { Comment, IGetCommentsResponseData, getComments } from '@src/apis';

import { queryKeys } from './constant';

export const useGetComments = (topicId: number) => {
  const result = useInfiniteQuery<IGetCommentsResponseData>(
    [queryKeys.comment, topicId],
    ({ pageParam }) => getComments(topicId, pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.offsetId ?? undefined,
    },
  );

  const { data } = result;

  const comments = data
    ? data.pages
        .map((page) => page.data)
        .reduce((mergedContents: Comment[], currentContents) => [...mergedContents, ...(currentContents || [])], [])
    : [];

  return {
    ...result,
    data: comments,
  };
};
