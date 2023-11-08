import useQuestion from '../../hooks/useQuestion';
import FormCustomLink from './FormCustomLink';
import FormQuestionnaire from './FormQuestionnaire';
import FormAnswers from './FormAnswers';

const QuestionForm = () => {
  const { questionDetail, question } = useQuestion();
  const { questionFormType } = question;
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
