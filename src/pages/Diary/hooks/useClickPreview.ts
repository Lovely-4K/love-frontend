import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from '~/router';
import { DiaryContent } from '~/types';
import { DiaryContext } from '~/pages/Diary/contexts/DiaryContext';
import useInfoToggle from '~/pages/Diary/hooks/useInfoToggle';

const useClickPreview = () => {
  const navigate = useNavigate();
  const diaryContext = useContext(DiaryContext);

  if (!diaryContext) throw new Error('Cannot find diaryProvider');

  const { setInfo, map } = diaryContext;
  const { openInfo } = useInfoToggle();

  const handleClickPreview = (preview: DiaryContent) => {
    if (!map) return;

    const info = {
      position: {
        lat: preview.latitude,
        lng: preview.longitude,
      },
      content: preview.placeName,
      address: preview.placeName,
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
