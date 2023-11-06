import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { useEditCoupleProfile } from '../hooks';
import useModal from '~/hooks/useModal';

interface MainContextProps {
  coupleMode: boolean;
  openDdayModal: () => void;
  closeDdayModal: () => void;
  dDayModalRef: React.RefObject<HTMLDialogElement>;
  openProfileModal: () => void;
  closeProfileModal: () => void;
  profileModalRef: React.RefObject<HTMLDialogElement>;
  editDday: string | undefined;
  setEditDday: React.Dispatch<React.SetStateAction<string | undefined>>;
  editCoupleProfile: any;
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
  const [editDday, setEditDday] = useState<string>();
  const { mutate: editCoupleProfile } = useEditCoupleProfile();

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
        editDday,
        setEditDday,
        editCoupleProfile,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };
