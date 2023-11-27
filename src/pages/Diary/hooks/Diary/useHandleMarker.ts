import { useNavigate } from 'react-router-dom';
import { paths } from '~/router';
import useDiary from '~/pages/Diary/hooks/Diary/useDiary';
import { MapMarker } from '~/types/map';

const useHandleMarker = () => {
  const navigate = useNavigate();
  const { setInfo, infoOpen, methods } = useDiary();
  const { openInfo } = methods.handleInfo;
  const { openSideBar } = methods.handleSideBar;

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
