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
  const answers = [firstChoice, secondChoice, thirdChoice, fourthChoice];

  const handleSubmitAnswer = () => {
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
    answers,
    selectedAnswer,
    handleClickAnswer,
    handleSubmitAnswer,
  };
};

export default useFormAnswers;
