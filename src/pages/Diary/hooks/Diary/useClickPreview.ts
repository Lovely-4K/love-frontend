import { useNavigate } from 'react-router-dom';
import { paths } from '~/router';
import { DiaryContent } from '~/types';
import { DiaryContextProps } from '~/pages/Diary/contexts/DiaryContext';

interface useClickPreviewProps {
  map: DiaryContextProps['map'];
  handleInfo: DiaryContextProps['methods']['handleInfo'];
}

const useClickPreview = ({ map, handleInfo }: useClickPreviewProps) => {
  const navigate = useNavigate();

  const { openInfo, setInfo } = handleInfo;

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
