import { PropsWithChildren, createContext } from 'react';
import useModal from '~/hooks/useModal';

interface MainContextProps {
  openDdayModal: () => void;
  closeDdayModal: () => void;
  dDayModalRef: React.RefObject<HTMLDialogElement>;
  openProfileModal: () => void;
  closeProfileModal: () => void;
  profileModalRef: React.RefObject<HTMLDialogElement>;
}

const MainContext = createContext({} as MainContextProps);

const MainProvider = ({ children }: PropsWithChildren) => {
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

  return (
    <MainContext.Provider
      value={{
        openDdayModal,
        closeDdayModal,
        dDayModalRef,
        openProfileModal,
        closeProfileModal,
        profileModalRef,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };
