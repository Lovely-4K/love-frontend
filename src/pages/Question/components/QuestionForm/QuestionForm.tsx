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

  const { myAnswer = '', opponentAnswer = '' } = questionDetail || {};

  return (
    <QuestionProvider>
      <div>
        <QuestionFormLabel />
        <QuestionFormSelect />
        {myAnswer && opponentAnswer && <QuestionFormCreate />}
      </div>
    </QuestionProvider>
  );
};

export default QuestionForm;
