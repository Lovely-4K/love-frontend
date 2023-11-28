import FormAnswer from './FormAnswer';
import FormQuestion from './FormQuestion';
import { Button } from '~/components/common';
import useQuestionCreateForm from '~/pages/QuestionCreate/hooks/useQuestionCreateForm';

/** @todo- data === undefined 일 시, 로딩 기능 추가, isError 일 시 Toast UI 추가 */
const Form = () => {
  const { question, answers, handleSubmitForm } = useQuestionCreateForm();
  const buttonInvalidate = question.length === 0 || answers.length < 2;

  return (
    <form onSubmit={handleSubmitForm} className="flex flex-col gap-10">
      <FormQuestion />
      <FormAnswer />
      <div className="flex w-full justify-end">
        <Button
          disabled={buttonInvalidate}
          className="bg-base-primary text-base-white hover:bg-base-secondary disabled:cursor-not-allowed disabled:bg-grey-200 disabled:text-grey-400"
          type="submit"
          onClick={handleSubmitForm}
        >
          질문 저장
        </Button>
      </div>
    </form>
  );
};

export default Form;
