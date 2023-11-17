import useUserAnswer from '../../hooks/useUserAnswer';
import FormAnswerItem from './FormAnswerItem';
import { Button } from '~/components/common';
import useQuestion from '~/pages/Question/hooks/useQuestion';

const FormAnswers = () => {
  const { questionForm, questionDetail, methods } = useQuestion();
  const { answers } = questionForm;
  const { myChoiceIndex } = questionDetail;
  const { handleSubmitUserAnswer } = methods;

  const { userAnswer, handleClickAnswer } = useUserAnswer(myChoiceIndex);
  const buttonContent = myChoiceIndex ? '수정' : '결정';

  return (
    <>
      <div className="my-3 flex flex-col flex-wrap gap-3 lg:flex-row">
        {answers.map((answer, index) => (
          <FormAnswerItem
            key={index}
            answer={answer}
            activeStatus={userAnswer === index + 1}
            handleClickAnswer={() => {
              handleClickAnswer(index + 1);
            }}
          />
        ))}
      </div>
      <div className="flex w-full justify-end">
        <Button
          disabled={userAnswer === -1}
          onClick={() => handleSubmitUserAnswer(userAnswer)}
          size="small"
          className="btn-primary rounded-xl hover:border-none hover:bg-base-secondary disabled:cursor-not-allowed disabled:bg-grey-300"
        >
          {buttonContent}
        </Button>
      </div>
    </>
  );
};

export default FormAnswers;
