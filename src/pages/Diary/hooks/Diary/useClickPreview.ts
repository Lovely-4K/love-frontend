import { useNavigate } from 'react-router-dom';
import { paths } from '~/router';
import { DiaryContent } from '~/types';
import useDiary from '~/pages/Diary/hooks/Diary/useDiary';
import useInfoToggle from '~/pages/Diary/hooks/Diary/useInfoToggle';

const useClickPreview = () => {
  const navigate = useNavigate();
  const { setInfo, map, methods } = useDiary();
  // const { openInfo } = useInfoToggle();
  const { openInfo } = methods.handleInfo;

  const handleClickPreview = (preview: DiaryContent) => {
    if (!map) return;

    const info = {
      position: {
        lat: preview.latitude,
        lng: preview.longitude,
      },
      content: preview.placeName,
      address: preview.address,
      phone: '010-010',
      spotId: String(preview.kakaoMapId),
    };

    const newLatLng = new kakao.maps.LatLng(
      info.position.lat,
      info.position.lng,
    );

    map.setCenter(newLatLng);
    setInfo(info);
    openInfo();
    navigate(`${paths.DIARY.ROOT}/${preview.kakaoMapId}/${preview.diaryId}`);
  };

  return { handleClickPreview };
};

export default useClickPreview;
