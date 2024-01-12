import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from '~/router';
import { DiaryContent } from '~/types';
import useMapLocation from '~/pages/Diary/hooks/Diary/useCurrentLocation';
import useInfoToggle from '~/pages/Diary/hooks/Diary/useInfoToggle';
import useInputRef from '~/pages/Diary/hooks/Diary/useInputRef';
import useMapCategory from '~/pages/Diary/hooks/Diary/useMapCategory';
import { infoAtom, mapAtom, markersAtom } from '~/stores/diaryAtoms';

const useClickPreview = () => {
  const map = useAtomValue(mapAtom);
  const setMarkers = useSetAtom(markersAtom);
  const [info, setInfo] = useAtom(infoAtom);
  const navigate = useNavigate();
  const { openInfo } = useInfoToggle();
  const { resetMapCategory } = useMapCategory();
  const { endSearchMode, setSearchKeyword } = useInputRef();
  const { useCurrentLocation } = useMapLocation();
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
    console.log(userPosition, info, hasEffectApplied);
    if (userPosition && map && info && !hasEffectApplied) {
      const newLatLng = new kakao.maps.LatLng(
        info.position.lat,
        info.position.lng,
      );
      map.setCenter(newLatLng);
      setHasEffectApplied(true);
    }
  }, [info, map, hasEffectApplied]);

  return { handleClickPreview };
};

export default useClickPreview;
