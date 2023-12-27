import { useState } from 'react';
import { useToast } from '~/hooks';
import { QuestionFormResponse, QuestionHistoryDetail } from '~/types';
import { useUpdateUserAnswer } from '~/services/question';

interface useFormAnswersParams {
  todayQuestion: QuestionFormResponse | undefined;
  coupleAnswer: QuestionHistoryDetail | undefined;
}

const useFormAnswers = ({
  todayQuestion,
  coupleAnswer,
}: useFormAnswersParams) => {
  const { showToast, handleShowToast } = useToast();

  const { mutate: mutateUserAnswer } = useUpdateUserAnswer();

  const [selectedAnswer, setSelectedAnswer] = useState(
    coupleAnswer?.myChoiceIndex ?? -1,
  );

  const formAnswers = [
    todayQuestion?.firstChoice,
    todayQuestion?.secondChoice,
    todayQuestion?.thirdChoice,
    todayQuestion?.fourthChoice,
  ].filter((answer) => !!answer);

  const handleUpdateUserAnswer = () => {
    if (todayQuestion === undefined) return;

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
