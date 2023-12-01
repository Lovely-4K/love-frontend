import styled from '@emotion/styled';
import { useToast } from '~/hooks';
import { screens } from '~/theme';
import useQuestionContext from '../../hooks/useQuestionContext';
import FormAnswerItem from './FormAnswerItem';
import { Button, Loading } from '~/components/common';

const FormAnswerItemContainer = styled.div<{ length: number }>`
  display: grid;
  grid-template-columns: ${({ length }) =>
    length <= 3 ? `repeat(1, 1fr)` : `repeat(2, 1fr)`};
  grid-gap: 0.5rem;
  padding: 0.5rem 0 1.25rem 0;

  @media (min-width: ${screens.lg}) {
    grid-template-columns: ${({ length }) => `repeat(${length}, 1fr)`};
  }
`;

const FormAnswers = () => {
  const { questionForm, questionDetail, methods, userAnswer } =
    useQuestionContext();
  const { showToast, handleShowToast } = useToast();

  if (questionDetail === undefined) {
    return <Loading size="large" />;
  }
  const { firstChoice, secondChoice, thirdChoice, fourthChoice } = questionForm;
  const { myChoiceIndex } = questionDetail;
  const { handleSubmitUserAnswer, handleClickAnswer } = methods;
  const answers = [firstChoice, secondChoice, thirdChoice, fourthChoice];
  const buttonContent = myChoiceIndex ? '수정' : '결정';
  const answersLength = answers.filter((answer) => answer).length;

  const handleSubmitAnswer = (userAnswer: number) => {
    handleShowToast();
    handleSubmitUserAnswer(userAnswer);
  };

  return (
    <>
      {showToast && (
        <div className="toast toast-center toast-top">
          <div className="alert flex bg-base-secondary text-base-white">
            <span>답변이 제출되었습니다!</span>
          </div>
        </div>
      )}
      <FormAnswerItemContainer length={answersLength}>
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
      </FormAnswerItemContainer>
      <div className="flex w-full justify-end">
        <Button
          disabled={
            userAnswer === -1 || questionDetail.myChoiceIndex === userAnswer
          }
          onClick={() => handleSubmitAnswer(userAnswer)}
          size="small"
          className="btn-primary hover:border-none hover:bg-base-secondary disabled:cursor-not-allowed disabled:bg-grey-300"
        >
          {buttonContent}
        </Button>
      </div>
    </>
  );
};

export default FormAnswers;
