import { ErrorBoundary } from 'react-error-boundary';
import { paths } from '~/router';
import { QuestionCreateForm } from './components';
import QuestionCreateErrorFallback from './components/QuestionCreateErrorFallback';
import { NavigationHeader } from '~/components/domain';

const QuestionCreate = () => {
  return (
    <div className="mx-auto h-full w-full max-w-4xl overflow-y-auto px-7 py-8 md:px-10">
      <ErrorBoundary FallbackComponent={QuestionCreateErrorFallback}>
        <NavigationHeader
          prevPageLink={paths.QUESTION}
          pageTitle="우리만의 질문 작성"
        />
        <QuestionCreateForm />
      </ErrorBoundary>
    </div>
  );
};

export default QuestionCreate;
