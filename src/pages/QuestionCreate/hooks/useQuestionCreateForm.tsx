import React, { useContext } from 'react';
import { QuestionCreateFormContext } from '../contexts/QuestionCreateFormContext';

const useQuestionCreateForm = () => {
  const { question, setQuestion, answers, setAnswers } = useContext(
    QuestionCreateFormContext,
  );

  /** @todo-백엔드 API 연결 로직 추가해야 함 */
  const handleSubmitForm = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
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

  return {
    question,
    answers,
    handleSubmitForm,
    handleQuestionChange,
    handleAddAnswer,
  };
};

export default useQuestionCreateForm;
