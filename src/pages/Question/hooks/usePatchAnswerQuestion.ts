import { useMutation } from '@tanstack/react-query';
import apiClient from '~/api/apiClient';

const usePatchAnswerQuestion = () => {
  const patchAnswerQuestion = async ({
    choiceNumber,
  }: {
    choiceNumber: number;
  }) => {
    await apiClient.patch(`/questions/1/answers?sex=FEMALE`, {
      choiceNumber,
    });
  };

  const { mutate, isError } = useMutation({ mutationFn: patchAnswerQuestion });

  return { mutate, isError };
};

export default usePatchAnswerQuestion;
