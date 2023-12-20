import useQuestionData from '../../hooks/useQuestionData';
import FormAnswers from './FormAnswers';
import FormCustomLink from './FormCustomLink';
import FormQuestionnaire from './FormQuestionnaire';

const QuestionForm = () => {
  const { todayQuestion, coupleAnswer } = useQuestionData();
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
