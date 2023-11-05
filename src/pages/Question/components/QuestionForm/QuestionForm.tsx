import useGetQuestion from '../../hooks/useGetQuestion';
import QuestionFormCreate from './QuestionFormCreate';
import QuestionFormLabel from './QuestionFormLabel';
import QuestionFormSelect from './QuestionFormSelect';
import { QuestionProvider } from '~/pages/Question/contexts/QuestionContext';
import useGetQuestionDetail from '~/pages/QuestionHistory/hooks/useGetQuestionDetail';

const QuestionForm = () => {
  useGetQuestion();
  const { data: { boyAnswer, girlAnswer } = {} } = useGetQuestionDetail(4);

  return (
    <QuestionProvider>
      <div>
        <QuestionFormLabel />
        <QuestionFormSelect />
        {boyAnswer && girlAnswer && <QuestionFormCreate />}
      </div>
    </QuestionProvider>
  );
};

export default QuestionForm;
