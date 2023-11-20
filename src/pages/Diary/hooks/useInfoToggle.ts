import { useContext } from 'react';
import { DiaryMapContext } from '~/pages/Diary/contexts/DiaryMapContext';

const useInfoToggle = () => {
  const diaryMapContext = useContext(DiaryMapContext);

  if (!diaryMapContext) throw new Error('Cannot find diaryMapProvider');

  const { infoOpen, setInfoOpen } = diaryMapContext;

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
