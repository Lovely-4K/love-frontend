import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from '~/router';
import { DiaryContent } from '~/types';
import { DiaryContextProps } from '~/pages/Diary/contexts/DiaryContext';

interface useClickPreviewProps {
  map: DiaryContextProps['map'];
  info: DiaryContextProps['info'];
  handleInfo: DiaryContextProps['methods']['handleInfo'];
  handleMapCategories: DiaryContextProps['methods']['handleMapCategories'];
  handleMarkers: DiaryContextProps['methods']['handleMarkers'];
  handleInput: DiaryContextProps['methods']['handleInput'];
  handleLocation: DiaryContextProps['methods']['handleLocation'];
}

const useClickPreview = ({
  map,
  info,
  handleInfo,
  handleMapCategories,
  handleMarkers,
  handleInput,
  handleLocation,
}: useClickPreviewProps) => {
  const navigate = useNavigate();

  const { openInfo, setInfo } = handleInfo;
  const { resetMapCategory } = handleMapCategories;
  const { setMarkers } = handleMarkers;
  const { endSearchMode, setSearchKeyword } = handleInput;
  const { useCurrentLocation } = handleLocation;
  const { userPosition } = useCurrentLocation();

  const [hasEffectApplied, setHasEffectApplied] = useState(false);

  const handleClickPreview = (preview: DiaryContent) => {
    if (!map || !userPosition) return;

    console.log(userPosition);

    const info = {
      position: {
        lat: preview.latitude,
        lng: preview.longitude,
      },
      content: preview.placeName,
      address: preview.address,
      spotId: String(preview.kakaoMapId),
    };

    const newLatLng = new kakao.maps.LatLng(
      info.position.lat,
      info.position.lng,
    );

    resetMapCategory();
    setInfo(info);
    openInfo();
    map.setCenter(newLatLng);
    endSearchMode();
    setMarkers([]);
    setSearchKeyword('');
    navigate(`${paths.DIARY.ROOT}/${preview.kakaoMapId}/${preview.diaryId}`);
  };

  useEffect(() => {
    if (userPosition && map && info && !hasEffectApplied) {
      const newLatLng = new kakao.maps.LatLng(
        info.position.lat,
        info.position.lng,
      );
      map.setCenter(newLatLng);
      setHasEffectApplied(true);
    }
  }, [info, userPosition, map, hasEffectApplied]);

  return { handleClickPreview };
};

export default useClickPreview;
