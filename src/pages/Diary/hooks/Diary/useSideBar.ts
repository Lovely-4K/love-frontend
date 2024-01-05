import { useAtom } from 'jotai';
import { sideBarToggleAtom } from '~/stores/diaryAtoms';

const useSideBar = () => {
  const [sideBarToggle, setSideBarToggle] = useAtom(sideBarToggleAtom);

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
