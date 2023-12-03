import { Suspense, useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useLocation } from 'react-router-dom';
import { MainContent, MainModalButtons, MainProfile } from './components';
import { MainProvider, ProfileProvider } from './contexts';
import MainContentErrorFallback from './MainContentErrorBoundary';
import { Loading } from '~/components/common';

const MainPage = () => {
  const { state } = useLocation();
  const [showNotification, setShowNotification] = useState(state);

  useEffect(() => {
    if (state) {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }

    return () => {
      setShowNotification(false);
    };
  }, [state]);

  return (
    <div className="flex h-full w-full flex-col p-3 md:justify-between md:p-7">
      {showNotification && (
        <div className="toast toast-center toast-top">
          <div className="alert alert-info bg-base-secondary text-base-white">
            <span>커플인 상태에서 이용이 가능해요...</span>
          </div>
        </div>
      )}
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
