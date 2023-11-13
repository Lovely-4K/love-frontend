import { PropsWithChildren, createContext, useMemo, useState } from 'react';
import { useMain } from '../hooks';
import useModal from '~/hooks/useModal';

interface MainModalContextProps {
  openDdayModal: () => void;
  closeDdayModal: () => void;
  dDayModalRef: React.RefObject<HTMLDialogElement>;
  openProfileModal: () => void;
  closeProfileModal: () => void;
  profileModalRef: React.RefObject<HTMLDialogElement>;
  modalId: number;
  setModalId: React.Dispatch<React.SetStateAction<number>>;
  dDay: number;
}

const ProfileContext = createContext<MainModalContextProps | null>(null);

const getDday = (meetDay: string) => {
  const today = new Date();
  const meetDate = new Date(meetDay);
  const diff = today.getTime() - meetDate.getTime();
  const dDay = Math.floor(diff / (1000 * 60 * 60 * 24));

  return dDay;
};

const ProfileProvider = ({ children }: PropsWithChildren) => {
  const { coupleProfile } = useMain();
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
  const [modalId, setModalId] = useState<number>(coupleProfile.boyId);

  const dDay = useMemo(() => getDday(coupleProfile.meetDay), [coupleProfile]);

  return (
    <ProfileContext.Provider
      value={{
        openDdayModal,
        closeDdayModal,
        dDayModalRef,
        openProfileModal,
        closeProfileModal,
        profileModalRef,
        modalId,
        setModalId,
        dDay,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export { ProfileContext, ProfileProvider };
