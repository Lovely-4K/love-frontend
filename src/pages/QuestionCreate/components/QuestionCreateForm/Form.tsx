import FormAnswer from './FormAnswer';
import FormQuestion from './FormQuestion';
import useQuestionCreateForm from '~/pages/QuestionCreate/hooks/useQuestionCreateForm';

/** @todo- data === undefined 일 시, 로딩 기능 추가, isError 일 시 Toast UI 추가 */
const Form = () => {
  const { question, answers, handleSubmitForm } = useQuestionCreateForm();
  const buttonInvalidate = question.length === 0 || answers.length === 0;

  return (
    <form onSubmit={handleSubmitForm} className="flex flex-col gap-10">
      <FormQuestion />
      <FormAnswer />
      <div className="flex w-full justify-end">
        <button
          disabled={buttonInvalidate}
          className="btn-medium w-full cursor-pointer rounded-xl bg-base-primary text-base-white hover:bg-base-secondary disabled:cursor-not-allowed disabled:bg-grey-200 disabled:text-grey-400"
          type="submit"
          onClick={handleSubmitForm}
        >
          질문 저장
        </button>
      </div>
    </form>
  );
};

export default Form;
