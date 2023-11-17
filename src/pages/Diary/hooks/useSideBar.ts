import { useContext } from 'react';
import { DiaryContext } from '~/pages/Diary/contexts/DiaryProvider';

const useSideBar = () => {
  const diaryContext = useContext(DiaryContext);

  if (!diaryContext) throw new Error('Cannot find SideBarProvider');

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
