import { QuestionHeader, QuestionForm, QuestionChat } from './components';
import { QuestionProvider } from '~/pages/Question/contexts/QuestionContext';

const Question = () => {
  return (
    <div className="flex flex-col px-7 py-8 md:px-10">
      <QuestionHeader />
      <QuestionProvider>
        <div className="mx-auto h-full w-full max-w-4xl">
          <QuestionForm />
          <QuestionChat />
        </div>
      </QuestionProvider>
    </div>
  );
};

export default Question;
