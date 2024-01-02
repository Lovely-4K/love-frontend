import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from '~/router';
import { useCreateForm } from '~/services/question';

const useForm = () => {
  const [question, setQuestion] = useState<string>('');
  const [answers, setAnswers] = useState<string[]>([]);

  const navigate = useNavigate();
  const { mutateAsync, isError } = useCreateForm();

  const handleSubmitForm = async (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    const data = await mutateAsync({
      questionForm: {
        questionContent: question,
        firstChoice: answers[0],
        secondChoice: answers[1],
        thirdChoice: answers[2],
        fourthChoice: answers[3],
      },
    });

    if (data) {
      navigate(paths.QUESTION);
    }
  };

  const handleInputQuestion = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  };

  const handleAddAnswer = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement>,
    inputValue: string,
  ) => {
    event.preventDefault();

    const nextAnswers = [...answers];

    nextAnswers.push(inputValue);
    setAnswers(nextAnswers);
  };

  const handleDeleteButton = (event: React.MouseEvent<HTMLElement>) => {
    const { index } = event.currentTarget.dataset;
    const nextAnswers = [...answers];

    nextAnswers.splice(Number(index), 1);
    setAnswers(nextAnswers);
  };

  return {
    isError,
    question,
    answers,
    handleSubmitForm,
    handleInputQuestion,
    handleAddAnswer,
    handleDeleteButton,
  };
};

export default useForm;
