import { DiaryContextProps } from '~/pages/Diary/contexts/DiaryContext';

interface useInfoToggleProps {
  infoOpen: DiaryContextProps['infoOpen'];
  setInfoOpen: DiaryContextProps['setInfoOpen'];
}

const useInfoToggle = ({ infoOpen, setInfoOpen }: useInfoToggleProps) => {
  const toggleInfo = () => {
    setInfoOpen(!infoOpen);
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
