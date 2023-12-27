import useLoadTodayQuestion from '../../hooks/common/useLoadTodayQuestion';
import FormAnswers from './FormAnswers';
import FormCustomLink from './FormCustomLink';
import FormQuestionnaire from './FormQuestionnaire';
import { Loading } from '~/components/common';

const QuestionForm = () => {
  const { todayQuestion, coupleAnswer } = useLoadTodayQuestion();
  if (todayQuestion === undefined || coupleAnswer === undefined) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  const { questionFormType } = todayQuestion;
  const { myAnswer, opponentAnswer } = coupleAnswer;

  return (
    <div>
      <FormQuestionnaire todayQuestion={todayQuestion} />
      <FormAnswers todayQuestion={todayQuestion} coupleAnswer={coupleAnswer} />
      {questionFormType === 'SERVER' && myAnswer && opponentAnswer && (
        <FormCustomLink />
      )}
    </div>
  );
};

export default QuestionForm;
