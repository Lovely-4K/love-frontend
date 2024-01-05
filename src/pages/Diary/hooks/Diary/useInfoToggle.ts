// import { DiaryContextProps } from '~/pages/Diary/contexts/DiaryContext';

import { useSetAtom } from 'jotai';
import { infoOpenAtom } from '~/stores/diaryAtoms';

const useInfoToggle = () => {
  const setInfoOpen = useSetAtom(infoOpenAtom);

  const toggleInfo = () => {
    setInfoOpen(!infoOpenAtom);
  };

  const closeInfo = () => {
    setInfoOpen(false);
  };

  const openInfo = () => {
    setInfoOpen(true);
  };

  return { toggleInfo, closeInfo, openInfo };
};

export default useInfoToggle;
