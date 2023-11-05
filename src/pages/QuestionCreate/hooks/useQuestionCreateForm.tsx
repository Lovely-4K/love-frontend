import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from '~/router';
import { QuestionCreateFormContext } from '../contexts/QuestionCreateFormContext';
import useCreateForm from './useCreateForm';

const useQuestionCreateForm = () => {
  const navigate = useNavigate();
  const { mutateAsync, data, isError } = useCreateForm();
  const { question, setQuestion, answers, setAnswers } = useContext(
    QuestionCreateFormContext,
  );

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
      },
    });

    if (data) {
      navigate(paths.QUESTION);
    }
  };

  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  };

  const handleAddAnswer = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement>,
    inputRef: React.MutableRefObject<HTMLInputElement | null>,
  ) => {
    event.preventDefault();

    const nextAnswers = [...answers];

    if (inputRef.current && inputRef.current.value) {
      nextAnswers.push(inputRef.current.value);
      inputRef.current.value = '';
    }

    setAnswers(nextAnswers);
  };

  const handleDeleteButton = (event: React.MouseEvent<HTMLElement>) => {
    const { index } = event.currentTarget.dataset;
    const nextAnswers = [...answers];

    nextAnswers.splice(Number(index), 1);
    setAnswers(nextAnswers);
  };

  return {
    data,
    isError,
    question,
    answers,
    handleSubmitForm,
    handleQuestionChange,
    handleAddAnswer,
    handleDeleteButton,
  };
};

export default useQuestionCreateForm;
