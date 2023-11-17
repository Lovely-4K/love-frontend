import { useContext } from 'react';
import { DiaryMapContext } from '~/pages/Diary/contexts/DiaryMapContext';

const useInfoToggle = () => {
  const { infoOpen, setInfoOpen } = useContext(DiaryMapContext);

  const toggleInfo = () => {
    setInfoOpen(!infoOpen);
  };

  const closeInfo = () => {
    setInfoOpen(false);
  };

  const openInfo = () => {
    setInfoOpen(true);
  };

  return { infoOpen, setInfoOpen, toggleInfo, closeInfo, openInfo };
};

export default useInfoToggle;
