import { useSetAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { paths } from '~/router';
import useInfoToggle from '~/pages/Diary/hooks/Diary/useInfoToggle';
import useSideBar from '~/pages/Diary/hooks/Diary/useSideBar';
import { infoAtom } from '~/stores/diaryAtoms';
import { MapMarker } from '~/types/map';

const useHandleMarker = () => {
  const navigate = useNavigate();
  const { openInfo } = useInfoToggle();
  const { openSideBar } = useSideBar();
  const setInfo = useSetAtom(infoAtom);

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

  return { handleMarker };
};

export default useHandleMarker;
