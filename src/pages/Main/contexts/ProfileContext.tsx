import { differenceInDays } from 'date-fns';
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { User } from '~/types';
import { useMain } from '../hooks';
import useModal from '~/hooks/useModal';

interface MainModalContextProps {
  openDdayModal: () => void;
  closeDdayModal: () => void;
  dDayModalRef: React.RefObject<HTMLDialogElement>;
  openProfileModal: () => void;
  closeProfileModal: () => void;
  profileModalRef: React.RefObject<HTMLDialogElement>;
  modalInfo: User;
  setModalInfo: React.Dispatch<React.SetStateAction<User>>;
  dDay: number;
  handleOpenProfileModal: ({
    birthday,
    calendarColor,
    imageUrl,
    mbti,
    nickname,
    id,
  }: User) => void;
}

const ProfileContext = createContext<MainModalContextProps | null>(null);

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
  const [modalInfo, setModalInfo] = useState<User>({
    birthday: '',
    calendarColor: '',
    imageUrl: '',
    mbti: '',
    nickname: '',
    id: 0,
  });

  const dDay = useMemo(
    () => differenceInDays(new Date(), new Date(coupleProfile.meetDay)),
    [coupleProfile],
  );

  const handleOpenProfileModal = useCallback(
    ({ birthday, calendarColor, imageUrl, mbti, nickname, id }: User) => {
      console.log(birthday, calendarColor, imageUrl, mbti, nickname, id);
      setModalInfo({
        birthday,
        calendarColor,
        imageUrl,
        mbti,
        nickname,
        id,
      });
      openProfileModal();
    },
    [openProfileModal],
  );

  const value = useMemo(
    () => ({
      openDdayModal,
      closeDdayModal,
      dDayModalRef,
      openProfileModal,
      closeProfileModal,
      profileModalRef,
      handleOpenProfileModal,
      modalInfo,
      setModalInfo,
      dDay,
    }),
    [
      openDdayModal,
      closeDdayModal,
      dDayModalRef,
      openProfileModal,
      closeProfileModal,
      profileModalRef,
      modalInfo,
      setModalInfo,
      dDay,
      handleOpenProfileModal,
    ],
  );

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};

export { ProfileContext, ProfileProvider };
