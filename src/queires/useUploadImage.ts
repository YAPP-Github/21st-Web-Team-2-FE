import { useMutation } from '@tanstack/react-query';

import { uploadImage } from '@src/apis';

const useUploadImage = () => {
  const mutation = useMutation((image: FormData) => uploadImage(image));

  return {
    ...mutation,
    uploadImage: mutation.mutateAsync,
  };
};

export default useUploadImage;
