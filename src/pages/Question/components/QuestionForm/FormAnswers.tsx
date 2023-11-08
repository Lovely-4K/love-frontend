import FormAnswerItem from './FormAnswerItem';
import useQuestion from '~/pages/Question/hooks/useQuestion';

const FormAnswers = () => {
  const { userAnswer, answers, myAnswer, handleSubmitUserAnswer } =
    useQuestion();
  const buttonContent = myAnswer !== '' ? '수정' : '결정';

  return (
    <>
      <div className="my-3 flex flex-col gap-3 lg:flex-row">
        {answers.map((answer, index) => {
          return (
            answer && (
              <FormAnswerItem
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
          {buttonContent}
        </button>
      </div>
    </>
  );
};

export default FormAnswers;
