import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from '~/router';
import { DiaryMapContext } from '~/pages/Diary/contexts/DiaryMapContext';
import useInfoToggle from '~/pages/Diary/hooks/useInfoToggle';
import useSideBar from '~/pages/Diary/hooks/useSideBar';
import { MapMarker } from '~/types/map';

const useHandleMarker = () => {
  const navigate = useNavigate();
  const diaryMapContext = useContext(DiaryMapContext);

  if (!diaryMapContext) throw new Error('Cannot find diaryMapProvider');

  const { setInfo } = diaryMapContext;
  const { openInfo } = useInfoToggle();
  const { openSideBar } = useSideBar();

  const handleMarker = (marker: MapMarker) => {
    openInfo();
    setInfo(marker);
    openSideBar();
    navigate(`${paths.DIARY.ROOT}/${marker.spotId}`);
  };

  return { handleMarker };
};

export default useHandleMarker;
