import useGetQuestion from '../../hooks/useGetQuestion';
import QuestionFormCreate from './QuestionFormCreate';
import QuestionFormLabel from './QuestionFormLabel';
import QuestionFormSelect from './QuestionFormSelect';
import { QuestionProvider } from '~/pages/Question/contexts/QuestionContext';
import useGetQuestionDetail from '~/pages/QuestionHistory/hooks/useGetQuestionDetail';

const QuestionForm = () => {
  const { data: question } = useGetQuestion();
  const { data: questionDetail } = useGetQuestionDetail(
    question?.body?.questionId || -1,
  );

  const { questionFormType = '' } = question?.body || {};
  const { myAnswer = '', opponentAnswer = '' } = questionDetail || {};

  const CreateForm = () =>
    questionFormType === 'SERVER' &&
    myAnswer &&
    opponentAnswer && <QuestionFormCreate />;

  return (
    <QuestionProvider>
      <div>
        <QuestionFormLabel />
        <QuestionFormSelect />
        <CreateForm />
      </div>
    </QuestionProvider>
  );
};

export default QuestionForm;
