import useDiary from '~/pages/Diary/hooks/Diary/useDiary';

const useSideBar = () => {
  const { sideBarToggle, setSideBarToggle } = useDiary();

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
