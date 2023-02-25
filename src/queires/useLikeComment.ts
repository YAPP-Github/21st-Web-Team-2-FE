import { useMutation } from '@tanstack/react-query';

import { LikeCommentRequest, likeComment } from '@src/apis';

const useLikeComment = () => {
  const mutation = useMutation((data: LikeCommentRequest) => likeComment(data));

  return {
    ...mutation,
    likeComment: mutation.mutateAsync,
  };
};

export default useLikeComment;
