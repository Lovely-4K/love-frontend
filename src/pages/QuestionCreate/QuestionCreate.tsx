import { QuestionContainer } from '../Question/Question';
import { QuestionCreateHeader, QuestionCreateForm } from './components';

const QuestionCreate = () => {
  return (
    <QuestionContainer>
      <QuestionCreateHeader />
      <QuestionCreateForm />
    </QuestionContainer>
  );
};

export default QuestionCreate;
