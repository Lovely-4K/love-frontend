import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QuestionHeader, QuestionForm, QuestionChat } from './components';
import QuestionErrorFallback from './components/QuestionErrorFallback';
import QuestionLoadingFallback from './components/QuestionLoadingFallback';
import { QuestionProvider } from '~/pages/Question/contexts/QuestionContext';

const Question = () => {
  return (
    <div className="flex h-full w-full flex-col px-7 py-8 md:px-10">
      <ErrorBoundary FallbackComponent={QuestionErrorFallback}>
        <Suspense fallback={<QuestionLoadingFallback />}>
          <QuestionHeader />
          <QuestionProvider>
            <div className="mx-auto h-full w-full max-w-4xl">
              <QuestionForm />
              <QuestionChat />
            </div>
          </QuestionProvider>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Question;
