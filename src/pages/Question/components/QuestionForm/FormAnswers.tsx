import styled from '@emotion/styled';
import { screens } from '~/theme';
import { QuestionFormResponse, QuestionHistoryDetail } from '~/types';
import useFormAnswers from '../../hooks/useFormAnswers';
import FormAnswerItem from './FormAnswerItem';
import { Button } from '~/components/common';

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

interface FormAnswersProps {
  todayQuestion: QuestionFormResponse;
  coupleAnswer: QuestionHistoryDetail;
}

const FormAnswers = ({ todayQuestion, coupleAnswer }: FormAnswersProps) => {
  const {
    selectedAnswer,
    answers,
    handleClickAnswer,
    handleSubmitAnswer,
    showToast,
  } = useFormAnswers({ todayQuestion, coupleAnswer });
  const { myChoiceIndex } = coupleAnswer;
  const buttonContent = myChoiceIndex ? '수정' : '결정';
  const answersLength = answers.filter((answer) => answer).length;

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
            activeStatus={selectedAnswer === index + 1}
            handleClickAnswer={() => {
              handleClickAnswer(index + 1);
            }}
          />
        ))}
      </FormAnswerItemContainer>
      <div className="flex w-full justify-end">
        <Button
          disabled={
            selectedAnswer === -1 ||
            coupleAnswer.myChoiceIndex === selectedAnswer
          }
          onClick={handleSubmitAnswer}
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
