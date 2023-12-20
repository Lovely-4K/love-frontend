import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QuestionHeader, QuestionForm, QuestionChat } from './components';
import QuestionErrorFallback from './components/QuestionErrorFallback';
import QuestionLoadingFallback from './components/QuestionLoadingFallback';
import useLoadTodayQuestion from './hooks/useLoadTodayQuestion';

const Question = () => {
  useLoadTodayQuestion();

  return (
    <div className="flex h-full w-full flex-col px-7 py-8 md:px-10">
      <ErrorBoundary FallbackComponent={QuestionErrorFallback}>
        <Suspense fallback={<QuestionLoadingFallback />}>
          <QuestionHeader />
          <div className="mx-auto h-full w-full max-w-4xl">
            <QuestionForm />
            <QuestionChat />
          </div>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Question;
