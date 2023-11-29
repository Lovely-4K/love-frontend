import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useMain } from '../../hooks';
import InviteContainer from './InviteContainer';
import MainContentErrorFallback from './MainContentErrorBoundary';
import PreviewsContainer from './PreviewsContainer';
import { Loading } from '~/components/common';

const MainContent = () => {
  const { coupleMode } = useMain();

  return coupleMode ? (
    <ErrorBoundary FallbackComponent={MainContentErrorFallback}>
      <React.Suspense fallback={<Loading size="medium" />}>
        <PreviewsContainer />
      </React.Suspense>
    </ErrorBoundary>
  ) : (
    <InviteContainer />
  );
};

export default MainContent;
