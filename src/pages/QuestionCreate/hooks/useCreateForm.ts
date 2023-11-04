import { useMutation } from '@tanstack/react-query';

import axios from 'axios';
import type { Question, code, links } from '~/types';

interface QuestionResponse {
  body?: Question;
  code: code;
  links?: links;
}

interface createFormParams {
  questionForm: Question;
}

const useCreateForm = () => {
  const createForm = async ({ questionForm }: createFormParams) => {
    const subURL = 'questions/question-forms?';
    const params = `memberId=${1}&coupleId=${1}`;
    const URL = subURL + params;
    const response = await axios.post<QuestionResponse>(URL, {
      data: questionForm,
    });

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
