import { useState } from 'react';
import FormAnswer from './FormAnswer';
import FormQuestion from './FormQuestion';

/** @todo- answer, question 에 대한 상태관리를 여기서 해주어야 함 */
const QuestionCreateForm = () => {
  const [question, setQuestion] = useState<string>('');
  const [answers, setAnswers] = useState<string[]>([]);
  const buttonInvalidate = question.length === 0 || answers.length === 0;

  /** @todo- submit 로직 추가*/
  const handleSubmitForm = () => {};

  return (
    <form onSubmit={handleSubmitForm} className="flex flex-col gap-3">
      <FormQuestion question={question} setQuestion={setQuestion} />
      <FormAnswer answers={answers} setAnswers={setAnswers} />
      <button
        disabled={buttonInvalidate}
        className="btn-medium cursor-pointer rounded-xl bg-base-primary text-base-white hover:bg-base-secondary disabled:cursor-not-allowed disabled:bg-grey-200 disabled:text-grey-400"
        type="submit"
        onClick={handleSubmitForm}
      >
        질문 저장
      </button>
    </form>
  );
};

export default QuestionCreateForm;
