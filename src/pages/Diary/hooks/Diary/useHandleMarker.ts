import { useNavigate } from 'react-router-dom';
import { paths } from '~/router';
import { DiaryContextProps } from '~/pages/Diary/contexts/DiaryContext';
import { MapMarker } from '~/types/map';

interface useHandleMarkerProps {
  handleInfo: DiaryContextProps['methods']['handleInfo'];
  handleSideBar: DiaryContextProps['methods']['handleSideBar'];
  setMarkers: DiaryContextProps['setMarkers'];
}

const useHandleMarker = ({
  handleInfo,
  handleSideBar,
  setMarkers,
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

  return { handleMarker, openInfo, setMarkers };
};

export default useHandleMarker;
