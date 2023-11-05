import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import useModal from '~/hooks/useModal';

interface MainContextProps {
  coupleMode: boolean;
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
  const [coupleMode, setCoupleMode] = useState(false);

  /** @todo couple 인지 아닌지 알 수 있는 로직 추가 */
  useEffect(() => {
    setCoupleMode(true);
  }, []);

  return (
    <MainContext.Provider
      value={{
        coupleMode,
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
