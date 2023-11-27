import { useNavigate } from 'react-router-dom';
import { paths } from '~/router';
import useDiary from '~/pages/Diary/hooks/Diary/useDiary';
import useInfoToggle from '~/pages/Diary/hooks/Diary/useInfoToggle';
import useSideBar from '~/pages/Diary/hooks/Diary/useSideBar';
import { MapMarker } from '~/types/map';

const useHandleMarker = () => {
  const navigate = useNavigate();
  const { setInfo } = useDiary();
  const { openInfo, infoOpen } = useInfoToggle();
  const { openSideBar } = useSideBar();

  const handleMarker = (marker: MapMarker) => {
    const { spotId, position, content } = marker;
    const { lat, lng } = position;

    setInfo(marker);
    openInfo();
    openSideBar();
    navigate(`${paths.DIARY.ROOT}/${spotId}`, {
      state: { lat, lng, spotId, content },
    });
  };

  return { handleMarker, infoOpen, openInfo };
};

export default useHandleMarker;
