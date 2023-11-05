import useGetQuestion from '../../hooks/useGetQuestion';
import QuestionFormCreate from './QuestionFormCreate';
import QuestionFormLabel from './QuestionFormLabel';
import QuestionFormSelect from './QuestionFormSelect';
import { QuestionProvider } from '~/pages/Question/contexts/QuestionContext';
import useGetQuestionDetail from '~/pages/QuestionHistory/hooks/useGetQuestionDetail';

const QuestionForm = () => {
  const { data: question } = useGetQuestion();
  console.log(question);
  const { data: { boyAnswer, girlAnswer } = {} } = useGetQuestionDetail(
    question?.body?.questionId || -1,
  );

  console.log(boyAnswer, girlAnswer);

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
