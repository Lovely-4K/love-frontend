import { useContext } from 'react';
import { ProfileContext } from '../contexts';

const useProfile = () => {
  const profileContext = useContext(ProfileContext);

  if (!profileContext) throw new Error('Cannot find ProfileProvider');

  const {
    openDdayModal,
    closeDdayModal,
    dDayModalRef,
    openProfileModal,
    closeProfileModal,
    profileModalRef,
    modalId,
    setModalId,
    dDay,
  } = profileContext;

  const handleOpenProfileModal = (id: number) => {
    setModalId(id);
    openProfileModal();
  };

  return {
    openDdayModal,
    closeDdayModal,
    dDayModalRef,
    openProfileModal,
    handleOpenProfileModal,
    closeProfileModal,
    profileModalRef,
    dDay,
    modalId,
  };
};

export default useProfile;
