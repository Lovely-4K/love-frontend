import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { MainContent, MainModalButtons, MainProfile } from './components';
import { MainProvider, ProfileProvider } from './contexts';
import MainContentErrorFallback from './MainContentErrorBoundary';
import { Loading } from '~/components/common';

const MainPage = () => {
  return (
    <div className="flex h-full w-full flex-col p-3 md:justify-between md:p-7">
      <ErrorBoundary FallbackComponent={MainContentErrorFallback}>
        <Suspense
          fallback={
            <div className="flex h-full w-full items-center justify-center">
              <Loading size="large" className="h-full w-full" />
            </div>
          }
        >
          <MainProvider>
            <ProfileProvider>
              <MainModalButtons />
              <MainProfile />
            </ProfileProvider>
            <MainContent />
          </MainProvider>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default MainPage;
