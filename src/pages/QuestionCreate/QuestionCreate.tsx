import { paths } from '~/router';
import { QuestionCreateForm } from './components';
import { QuestionCreateFormProvider } from './contexts/QuestionCreateFormContext';
import { NavigationHeader } from '~/components/domain';

const QuestionCreate = () => {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-y-auto px-7 py-8 md:px-10">
      <NavigationHeader
        prevPageLink={paths.QUESTION}
        pageTitle="우리만의 질문 작성"
      />
      <QuestionCreateFormProvider>
        <QuestionCreateForm />
      </QuestionCreateFormProvider>
    </div>
  );
};

export default QuestionCreate;
