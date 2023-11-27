import useDiary from '~/pages/Diary/hooks/Diary/useDiary';

const useInfoToggle = () => {
  const { infoOpen, setInfoOpen } = useDiary();

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
