import { useMutation } from '@tanstack/react-query';
import type { QuestionForm, code, links } from '~/types';
import apiClient from '~/api/apiClient';

interface QuestionResponse {
  body?: QuestionForm;
  code: code;
  links?: links;
}

interface createFormParams {
  questionForm: QuestionForm;
}

const useCreateForm = () => {
  const createForm = async ({ questionForm }: createFormParams) => {
    const subURL = 'questions/question-forms?';
    const params = `memberId=${1}&coupleId=${1}`;
    const URL = subURL + params;
    const response = await apiClient.post<QuestionResponse>(
      URL,
      JSON.stringify(questionForm),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    return response.data;
  };

  const { mutateAsync, data, isError } = useMutation({
    mutationFn: async (createFormParams: createFormParams) => {
      return createForm(createFormParams);
    },
  });

  return { mutateAsync, data, isError };
};

export default useCreateForm;
