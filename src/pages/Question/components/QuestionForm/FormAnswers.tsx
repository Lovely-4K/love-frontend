import styled from '@emotion/styled';
import { screens } from '~/theme';
import { QuestionFormResponse, QuestionHistoryDetail } from '~/types';
import useFormAnswers from '../../hooks/QuestionForm/useFormAnswers';
import FormAnswerItem from './FormAnswerItem';
import FormAnswersToast from './FormAnswersToast';
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
    formAnswers,
    selectedAnswer,
    handleClickAnswer,
    handleUpdateUserAnswer,
    showToast,
  } = useFormAnswers({ todayQuestion, coupleAnswer });

  const buttonDisabledStatus =
    selectedAnswer === -1 || coupleAnswer.myChoiceIndex === selectedAnswer;

  return (
    <div>
      {showToast && <FormAnswersToast />}
      <FormAnswerItemContainer length={formAnswers.length}>
        {formAnswers.map((answer, index) => (
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
          disabled={buttonDisabledStatus}
          onClick={handleUpdateUserAnswer}
          size="small"
          className="btn-primary hover:border-none hover:bg-base-secondary disabled:cursor-not-allowed disabled:bg-grey-300"
        >
          결정
        </Button>
      </div>
    </div>
  );
};

export default FormAnswers;
