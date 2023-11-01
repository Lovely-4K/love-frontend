import { QuestionContainer } from '../Question/Question';
import { QuestionCreateHeader, QuestionCreateForm } from './components';
import { QuestionCreateFormProvider } from './contexts/QuestionCreateFormContext';

const QuestionCreate = () => {
  return (
    <QuestionContainer>
      <QuestionCreateHeader />
      <QuestionCreateFormProvider>
        <QuestionCreateForm />
      </QuestionCreateFormProvider>
    </QuestionContainer>
  );
};

export default QuestionCreate;
