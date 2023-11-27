import { useNavigate } from 'react-router-dom';
import { paths } from '~/router';
import { DiaryContextProps } from '~/pages/Diary/contexts/DiaryContext';
import { MapMarker } from '~/types/map';

interface useHandleMarkerProps {
  infoOpen: DiaryContextProps['infoOpen'];
  handleInfo: DiaryContextProps['methods']['handleInfo'];
  handleSideBar: DiaryContextProps['methods']['handleSideBar'];
}

const useHandleMarker = ({
  infoOpen,
  handleInfo,
  handleSideBar,
}: useHandleMarkerProps) => {
  const navigate = useNavigate();
  const { openInfo, setInfo } = handleInfo;
  const { openSideBar } = handleSideBar;

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
