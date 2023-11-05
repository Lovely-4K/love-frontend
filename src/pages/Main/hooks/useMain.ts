import { useContext } from 'react';
import { MainContext } from '../context';
import useGetCoupleProfile from './useGetCoupleProfile';

const useMain = () => {
  const {
    coupleMode,
    openDdayModal,
    closeDdayModal,
    dDayModalRef,
    openProfileModal,
    closeProfileModal,
    profileModalRef,
  } = useContext(MainContext);
  const { data: mainProfileData } = useGetCoupleProfile();

  return {
    coupleMode,
    openDdayModal,
    closeDdayModal,
    dDayModalRef,
    openProfileModal,
    closeProfileModal,
    profileModalRef,
    mainProfileData,
  };
};

export default useMain;
