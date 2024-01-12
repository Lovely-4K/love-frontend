import { useAtom, useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';
import { Position } from '~/types';
import { mapAtom } from '~/stores/diaryAtoms';
import { hasEffectAppliedAtom, userPositionAtom } from '~/stores/diaryMapAtoms';

const useMapLocation = () => {
  const map = useAtomValue(mapAtom);
  const [hasEffectApplied, setHasEffectApplied] = useAtom(hasEffectAppliedAtom);

  const useCurrentLocation = () => {
    const [userPosition, setUserPosition] = useAtom(userPositionAtom);
    const [isCurrentLocation, setIsCurrentLocation] = useState<boolean>(true);
    const [curMapCenterPosition, setCurMapCenterPosition] =
      useState<kakao.maps.LatLng>();

    const onSuccess = (position: Position) => {
      const { latitude, longitude } = position.coords;

      setUserPosition({ latitude, longitude });
    };

    useEffect(() => {
      if (!hasEffectApplied) {
        const options = {
          enableHighAccuracy: false,
          timeout: Infinity,
          maximumAge: 0,
        };

        navigator.geolocation.getCurrentPosition(onSuccess, null, options);

        setHasEffectApplied(true);
      }
    }, [hasEffectApplied]);

    const userPositionLatLng = userPosition && {
      lat: userPosition.latitude,
      lng: userPosition.longitude,
    };

    const setCenter = () => {
      if (userPosition && map) {
        const { latitude, longitude } = userPosition;
        const newLatLng = new kakao.maps.LatLng(latitude, longitude);
        map.setCenter(newLatLng);
        setIsCurrentLocation(true);
      }
    };

    const roundLatLng = (latLng: kakao.maps.LatLng) => ({
      lat: parseFloat(latLng.getLat().toFixed(4)),
      lng: parseFloat(latLng.getLng().toFixed(4)),
    });

    const compareCurLocation = () => {
      if (userPosition && map) {
        const mapCenter = map.getCenter();
        const curLatLng = new kakao.maps.LatLng(
          userPosition.latitude,
          userPosition.longitude,
        );

        const roundedMapCenter = roundLatLng(mapCenter);
        const roundedCurLatLng = roundLatLng(curLatLng);

        const isEqual =
          roundedMapCenter.lat === roundedCurLatLng.lat &&
          roundedMapCenter.lng === roundedCurLatLng.lng;

        setIsCurrentLocation(isEqual);

        return isCurrentLocation;
      }

      return false;
    };

    useEffect(() => {
      const handleMapDragEnd = () => {
        compareCurLocation();
        setCurMapCenterPosition(map!.getCenter());
      };

      if (map) {
        // dragend 이벤트 등록
        kakao.maps.event.addListener(map, 'dragend', handleMapDragEnd);
      }

      return () => {
        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        if (map) {
          kakao.maps.event.removeListener(map, 'dragend', handleMapDragEnd);
        }
      };
    }, [map, isCurrentLocation, curMapCenterPosition]);

    return {
      userPosition: userPositionLatLng,
      setUserPosition,
      setCenter,
      compareCurLocation,
      isCurrentLocation,
    };
  };

  return { useCurrentLocation };
};

export default useMapLocation;
