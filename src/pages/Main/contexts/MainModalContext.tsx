import { PropsWithChildren, createContext, useMemo } from 'react';
import useModal from '~/hooks/useModal';

interface MainModalContextProps {
  openDdayModal: () => void;
  closeDdayModal: () => void;
  dDayModalRef: React.RefObject<HTMLDialogElement>;
  openProfileModal: () => void;
  closeProfileModal: () => void;
  profileModalRef: React.RefObject<HTMLDialogElement>;
}

const MainModalContext = createContext<MainModalContextProps | null>(null);

const MainModalProvider = ({ children }: PropsWithChildren) => {
  const {
    openModal: openDdayModal,
    closeModal: closeDdayModal,
    modalRef: dDayModalRef,
  } = useModal();
  const {
    openModal: openProfileModal,
    closeModal: closeProfileModal,
    modalRef: profileModalRef,
  } = useModal();

  const value = useMemo(
    () => ({
      openDdayModal,
      closeDdayModal,
      dDayModalRef,
      openProfileModal,
      closeProfileModal,
      profileModalRef,
    }),
    [
      openDdayModal,
      closeDdayModal,
      dDayModalRef,
      openProfileModal,
      closeProfileModal,
      profileModalRef,
    ],
  );

  return (
    <MainModalContext.Provider value={value}>
      {children}
    </MainModalContext.Provider>
  );
};

export { MainModalContext, MainModalProvider };
