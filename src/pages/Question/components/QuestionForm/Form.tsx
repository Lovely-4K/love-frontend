import useQuestion from '../../hooks/useQuestion';
import FormAnswers from './FormAnswers';
import FormCustomLink from './FormCustomLink';
import FormQuestionnaire from './FormQuestionnaire';

const QuestionForm = () => {
  const { questionDetail, questionForm } = useQuestion();
  const { questionFormType } = questionForm;
  const { myAnswer, opponentAnswer } = questionDetail;

  const CreateForm = () =>
    questionFormType === 'SERVER' &&
    myAnswer &&
    opponentAnswer && <FormCustomLink />;

  return (
    <div>
      <FormQuestionnaire />
      <FormAnswers />
      <CreateForm />
    </div>
  );
};

export default QuestionForm;
