import FormAnswers from './FormAnswers';
import FormQuestion from './FormQuestion';
import { Button } from '~/components/common';
import { useForm } from '~/pages/QuestionCreate/hooks';

const Form = () => {
  const { question, answers, handleSubmitForm } = useForm();
  const buttonInvalidate = question.length === 0 || answers.length < 2;

  return (
    <form onSubmit={handleSubmitForm} className="flex flex-col gap-10">
      <FormQuestion />
      <FormAnswers />
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
