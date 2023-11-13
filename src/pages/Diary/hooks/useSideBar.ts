import { useContext } from 'react';
import { DiarySideBarContext } from '~/pages/Diary/contexts/DiarySideBarContext';

const useSideBar = () => {
  const diarySideBarContext = useContext(DiarySideBarContext);

  if (!diarySideBarContext) throw new Error('Cannot find SideBarProvider');

  const { isOpen, setIsOpen } = diarySideBarContext;

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    setIsOpen,
    toggleSideBar,
  };
};

export default useSideBar;
