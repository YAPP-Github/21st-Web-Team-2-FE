import { useMutation, useQueryClient } from '@tanstack/react-query';

import { PostCommentRequest, createComment } from '@src/apis';

import { queryKeys } from './constant';

export const useCreateComments = () => {
  const queryClient = useQueryClient();

  // TODO-GYU: 성공시, 실패시 등 낙관적업데이트 관련 로직 추가
  const mutation = useMutation((newComment: PostCommentRequest) => createComment(newComment), {
    onSuccess: (_, variables) => queryClient.invalidateQueries([queryKeys.comment, variables.topicId]),
  });

  return { ...mutation, createComments: mutation.mutate };
};
