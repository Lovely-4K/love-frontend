import { useContext } from 'react';
import { DiaryMapContext } from '~/pages/Diary/contexts/DiaryMapContext';
import useInfoToggle from '~/pages/Diary/hooks/useInfoToggle';
import useSideBar from '~/pages/Diary/hooks/useSideBar';
import { MapMarker } from '~/types/map';

const useHandleMarker = () => {
  const { setInfo } = useContext(DiaryMapContext);
  const { openInfo } = useInfoToggle();
  const { openSideBar } = useSideBar();

  const handleMarker = (marker: MapMarker) => {
    openInfo();
    setInfo(marker);
    openSideBar();
  };

  return { handleMarker };
};

export default useHandleMarker;
