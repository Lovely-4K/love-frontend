import { useContext } from 'react';
import { DiaryContext } from '~/pages/Diary/contexts/DiaryContext';

const useSideBar = () => {
  const diaryContext = useContext(DiaryContext);

  if (!diaryContext) throw new Error('Cannot find diaryProvider');

  const { sideBarToggle, setSideBarToggle } = diaryContext;

  const toggleSideBar = () => {
    setSideBarToggle(!sideBarToggle);
  };

  const openSideBar = () => {
    setSideBarToggle(true);
  };

  return {
    sideBarToggle,
    setSideBarToggle,
    toggleSideBar,
    openSideBar,
  };
};

export default useSideBar;
