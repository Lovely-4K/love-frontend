import useQuestionContext from '../../hooks/useQuestionContext';
import FormAnswers from './FormAnswers';
import FormCustomLink from './FormCustomLink';
import FormQuestionnaire from './FormQuestionnaire';
import { Loading } from '~/components/common';

const QuestionForm = () => {
  const { questionDetail, questionForm } = useQuestionContext();
  const { questionFormType } = questionForm;

  if (questionDetail === undefined) {
    return <Loading size="large" />;
  }

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
