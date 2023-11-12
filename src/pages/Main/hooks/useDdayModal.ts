import { ChangeEvent, useContext } from 'react';
import { DdayModalContext } from '../contexts';
import useEditCoupleProfile from './useEditCoupleProfile';
import useProfile from './useProfile';

const useDdayModal = () => {
  const dDayModalContext = useContext(DdayModalContext);
  const editCoupleProfileQuery = useEditCoupleProfile();
  const { closeDdayModal } = useProfile();

  if (!dDayModalContext) throw new Error('Cannot find DdayModalProvider');

  const { editDday, setEditDday } = dDayModalContext;

  const handleDdayChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEditDday(event.target.value);
  };

  const handleEditDday = () => {
    editCoupleProfileQuery.mutate(editDday);

    closeDdayModal();
  };

  return {
    editDday,
    handleEditDday,
    handleDdayChange,
  };
};

export default useDdayModal;
