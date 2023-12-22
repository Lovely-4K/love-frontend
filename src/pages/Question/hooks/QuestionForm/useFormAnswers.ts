import { useState } from 'react';
import { useToast } from '~/hooks';
import { QuestionFormResponse, QuestionHistoryDetail } from '~/types';
import { useUpdateUserAnswer } from '~/services/question';

interface useFormAnswersParams {
  todayQuestion: QuestionFormResponse;
  coupleAnswer: QuestionHistoryDetail;
}

const useFormAnswers = ({
  todayQuestion,
  coupleAnswer,
}: useFormAnswersParams) => {
  const { showToast, handleShowToast } = useToast();

  const { mutate: mutateUserAnswer } = useUpdateUserAnswer();

  const [selectedAnswer, setSelectedAnswer] = useState(
    coupleAnswer.myChoiceIndex ?? -1,
  );

  const { firstChoice, secondChoice, thirdChoice, fourthChoice } =
    todayQuestion;
  const formAnswers = [
    firstChoice,
    secondChoice,
    thirdChoice,
    fourthChoice,
  ].filter((answer) => !!answer);

  const handleUpdateUserAnswer = () => {
    const { questionId } = todayQuestion;

    mutateUserAnswer({
      questionId,
      selectedItemIndex: selectedAnswer,
    });

    handleShowToast();
  };

  const handleClickAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex === selectedAnswer ? -1 : answerIndex);
  };

  return {
    showToast,
    formAnswers,
    selectedAnswer,
    handleClickAnswer,
    handleUpdateUserAnswer,
  };
};

export default useFormAnswers;
