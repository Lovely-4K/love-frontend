import FormAnswer from './FormAnswer';
import FormQuestion from './FormQuestion';
import useQuestionCreateForm from '~/pages/QuestionCreate/hooks/useQuestionCreateForm';

/** @todo- answer, question 에 대한 상태관리를 여기서 해주어야 함 */
const Form = () => {
  const { question, answers, handleSubmitForm } = useQuestionCreateForm();
  const buttonInvalidate = question.length === 0 || answers.length === 0;

  return (
    <form onSubmit={handleSubmitForm} className="flex flex-col gap-3">
      <FormQuestion />
      <FormAnswer />
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

export default Form;
