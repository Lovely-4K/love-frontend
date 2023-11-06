import useQuestion from '../../hooks/useQuestion';
import QuestionFormCreate from './QuestionFormCreate';
import QuestionFormLabel from './QuestionFormLabel';
import QuestionFormSelect from './QuestionFormSelect';

const QuestionForm = () => {
  const { questionDetail, question } = useQuestion();
  const { questionFormType } = question;
  const { myAnswer, opponentAnswer } = questionDetail;

  const CreateForm = () =>
    questionFormType === 'SERVER' &&
    myAnswer &&
    opponentAnswer && <QuestionFormCreate />;

  return (
    <div>
      <QuestionFormLabel />
      <QuestionFormSelect />
      <CreateForm />
    </div>
  );
};

export default QuestionForm;
