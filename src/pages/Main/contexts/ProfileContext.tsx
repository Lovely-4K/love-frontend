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

const ProfileContext = createContext<MainModalContextProps | null>(null);

const ProfileProvider = ({ children }: PropsWithChildren) => {
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
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};

export { ProfileContext, ProfileProvider };
