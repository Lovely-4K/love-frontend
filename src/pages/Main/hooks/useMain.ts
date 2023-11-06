import { ChangeEvent, useContext, useEffect } from 'react';
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
    editDday,
    setEditDday,
    editCoupleProfile,
  } = useContext(MainContext);
  const { data: mainProfileData } = useGetCoupleProfile();

  const getDday = () => {
    if (!mainProfileData) return null;

    const { meetDay } = mainProfileData;
    const today = new Date();
    const meetDate = new Date(meetDay);
    const diff = today.getTime() - meetDate.getTime();
    const dDay = Math.floor(diff / (1000 * 60 * 60 * 24));

    return dDay;
  };

  useEffect(() => {
    if (mainProfileData) {
      setEditDday(mainProfileData.meetDay);
    }
  }, [mainProfileData, setEditDday]);

  const handleEditDday = (event: ChangeEvent<HTMLInputElement>) => {
    setEditDday(event.target.value);
  };

  const handleEditCoupleProfile = () => {
    if (editDday) {
      editCoupleProfile(editDday);
    }
  };

  return {
    coupleMode,
    openDdayModal,
    closeDdayModal,
    dDayModalRef,
    openProfileModal,
    closeProfileModal,
    profileModalRef,
    mainProfileData,
    getDday,
    editDday,
    handleEditDday,
    handleEditCoupleProfile,
  };
};

export default useMain;
