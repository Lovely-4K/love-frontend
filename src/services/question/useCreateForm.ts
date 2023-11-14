import { useMutation } from '@tanstack/react-query';
import type { QuestionForm, code, links } from '~/types';
import apiClient from '~/api/apiClient';

export interface createQuestionFromResponse {
  body?: QuestionForm;
  code: code;
  links?: links;
}

export interface createFormParams {
  questionForm: QuestionForm;
}

const createForm = async ({ questionForm }: createFormParams) => {
  const URL = 'questions/question-forms';
  const response = await apiClient.post<createQuestionFromResponse>(
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

const useCreateForm = () => {
  return useMutation({
    mutationFn: async (createFormParams: createFormParams) => {
      return createForm(createFormParams);
    },
  });
};

export default useCreateForm;
