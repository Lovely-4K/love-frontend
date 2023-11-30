import useQuestionContext from '../../hooks/useQuestionContext';
import FormAnswers from './FormAnswers';
import FormCustomLink from './FormCustomLink';
import FormQuestionnaire from './FormQuestionnaire';

const QuestionForm = () => {
  const { questionDetail, questionForm } = useQuestionContext();
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
