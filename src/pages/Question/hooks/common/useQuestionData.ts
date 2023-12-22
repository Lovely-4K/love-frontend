import { useGetQuestion, useGetCoupleAnswer } from '~/services/question';

const useQuestionData = () => {
  const { data: todayQuestion } = useGetQuestion();
  const { data: coupleAnswer } = useGetCoupleAnswer(todayQuestion.questionId);

  return { todayQuestion, coupleAnswer };
};

export default useQuestionData;
