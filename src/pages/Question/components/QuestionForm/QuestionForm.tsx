import useGetQuestion from '../../hooks/useGetQuestion';
import QuestionFormCreate from './QuestionFormCreate';
import QuestionFormLabel from './QuestionFormLabel';
import QuestionFormSelect from './QuestionFormSelect';
import { QuestionProvider } from '~/pages/Question/contexts/QuestionContext';

const QuestionForm = () => {
  useGetQuestion();

  return (
    <QuestionProvider>
      <div>
        <QuestionFormLabel />
        <QuestionFormSelect />
        <QuestionFormCreate />
      </div>
    </QuestionProvider>
  );
};

export default QuestionForm;
