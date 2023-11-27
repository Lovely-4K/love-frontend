import { DiaryContextProps } from '~/pages/Diary/contexts/DiaryContext';

interface useSideBarProps {
  sideBarToggle: DiaryContextProps['sideBarToggle'];
  setSideBarToggle: DiaryContextProps['setSideBarToggle'];
}

const useSideBar = ({ sideBarToggle, setSideBarToggle }: useSideBarProps) => {
  const toggleSideBar = () => {
    setSideBarToggle(!sideBarToggle);
  };

  const openSideBar = () => {
    setSideBarToggle(true);
  };

  return {
    toggleSideBar,
    openSideBar,
  };
};

export default useSideBar;
