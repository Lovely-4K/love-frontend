import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from '~/router';
import { DiaryContext } from '~/pages/Diary/contexts/DiaryContext';
import useInfoToggle from '~/pages/Diary/hooks/useInfoToggle';
import useSideBar from '~/pages/Diary/hooks/useSideBar';
import { MapMarker } from '~/types/map';

const useHandleMarker = () => {
  const navigate = useNavigate();
  const diaryContext = useContext(DiaryContext);

  if (!diaryContext) throw new Error('Cannot find diaryProvider');

  const { setInfo } = diaryContext;
  const { openInfo, infoOpen } = useInfoToggle();
  const { openSideBar } = useSideBar();

  const handleMarker = (marker: MapMarker) => {
    const { spotId } = marker;

    setInfo(marker);
    openInfo();
    openSideBar();
    navigate(`${paths.DIARY.ROOT}/${spotId}`);
  };

  return { handleMarker, infoOpen, openInfo };
};

export default useHandleMarker;
