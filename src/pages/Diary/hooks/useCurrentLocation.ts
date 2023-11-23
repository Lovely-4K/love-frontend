import { useContext, useEffect, useState } from 'react';
import { Coordinates, Position } from '~/types';
import { DiaryContext } from '~/pages/Diary/contexts/DiaryContext';
import { DiaryMapContext } from '~/pages/Diary/contexts/DiaryMapContext';

const useCurrentLocation = () => {
  const diaryMapContext = useContext(DiaryMapContext);
  const diaryContext = useContext(DiaryContext);

  if (!diaryMapContext) throw new Error('Cannot find diaryMapProvider');
  if (!diaryContext) throw new Error('Cannot find diaryProvider');

  const {} = diaryMapContext;
  const { map } = diaryContext;
  const [userPosition, setUserPosition] = useState<Coordinates | null>(null);

  const onSuccess = (position: Position) => {
    const { latitude, longitude } = position.coords;
    setUserPosition({ latitude, longitude });
  };

  useEffect(() => {
    const options = {
      enableHighAccuracy: true, // 높은 정확도 요청
      timeout: 5000, // 위치 정보를 가져오는 데 최대로 허용되는 시간, 실패시 onError 콜백 호출
      maximumAge: 0, // 이전에 가져온 위치 정보의 최대 사용 나이 -> 초과시 새로운 위치 정보 가져오도록 시도
    };

    navigator.geolocation.getCurrentPosition(onSuccess, null, options);
  }, []);

  const userPositionLatLng = userPosition && {
    lat: userPosition.latitude,
    lng: userPosition.longitude,
  };

  const setCenter = () => {
    if (userPosition && map) {
      const { latitude, longitude } = userPosition;
      const newLatLng = new kakao.maps.LatLng(latitude, longitude);
      map.setCenter(newLatLng);
    }
  };

  return { userPosition: userPositionLatLng, setUserPosition, setCenter };
};

export default useCurrentLocation;
