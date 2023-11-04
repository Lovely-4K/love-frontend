import QuestionFormSelectItem from './QuestionFormSelectItem';
import useQuestionForm from '~/pages/Question/hooks/useQuestionForm';

const QuestionFormSelect = () => {
  const { userAnswer, answers, handleSubmitUserAnswer } = useQuestionForm();

  return (
    <>
      <div className="my-3 flex flex-col gap-3 lg:flex-row">
        {answers.map((answer, index) => {
          return (
            answer && (
              <QuestionFormSelectItem
                key={index}
                itemIndex={index + 1}
                answer={answer}
              />
            )
          );
        })}
      </div>
      <div className="flex w-full justify-end">
        <button
          disabled={userAnswer === -1}
          onClick={handleSubmitUserAnswer}
          className="btn-small btn-primary w-full rounded-xl hover:border-none hover:bg-base-secondary disabled:cursor-not-allowed disabled:bg-grey-300"
        >
          결정
        </button>
      </div>
    </>
  );
};

export default QuestionFormSelect;
