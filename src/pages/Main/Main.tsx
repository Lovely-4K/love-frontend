import { Suspense, useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useLocation } from 'react-router-dom';
import { MainContent, MainModalButtons, MainProfile } from './components';
import { MainProvider, ProfileProvider } from './contexts';
import MainContentErrorFallback from './MainContentErrorBoundary';
import { Button, Loading } from '~/components/common';
import { Modal } from '~/components/domain';
import useModal from '~/hooks/useModal';
import { useGetCoupleProfile } from '~/services/couple';
import useRecreateCouple from '~/services/couple/useRecreateCouple';

const MainPage = () => {
  const { state } = useLocation();
  const [showNotification, setShowNotification] = useState(state);
  const { closeModal, modalRef, openModal } = useModal();
  const { data: coupleProfile } = useGetCoupleProfile();
  const { mutate: recreateCouple } = useRecreateCouple();

  const coupleMode = coupleProfile.coupleStatus;

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

  useEffect(() => {
    if (coupleMode === 'RECOUPLE') openModal();
  }, [coupleMode, openModal]);

  return (
    <div className="flex h-full w-full flex-col p-3 md:justify-between md:p-7">
      {showNotification && (
        <div className="toast toast-center toast-top z-50">
          <div className="alert alert-info bg-base-secondary text-base-white">
            <span>커플인 상태에서 이용이 가능해요...</span>
          </div>
        </div>
      )}
      {coupleMode === 'RECOUPLE' && (
        <Modal
          ref={modalRef}
          className="flex flex-col items-center gap-5 py-10"
        >
          <span className="text-xl text-base-black">
            이전의 상대방이 재결합을 요청했어요!
          </span>
          <div className="flex w-full justify-center gap-2">
            <Button
              size="medium"
              onClick={closeModal}
              className="border border-grey-300 bg-base-white text-grey-400 focus:outline-none"
            >
              취소
            </Button>
            <Button
              size="medium"
              onClick={() => recreateCouple()}
              className="bg-base-primary text-base-white focus:outline-none"
            >
              수락
            </Button>
          </div>
        </Modal>
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
