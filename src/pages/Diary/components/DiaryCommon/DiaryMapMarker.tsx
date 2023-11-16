import { useState } from 'react';
import { CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk';
import DiaryMapInfo from '~/pages/Diary/components/DiaryCommon/DiaryMapInfo';
import useCurrentLocation from '~/pages/Diary/hooks/useCurrentLoaction';
import useInputRef from '~/pages/Diary/hooks/useInputRef';
import useSearchLocation from '~/pages/Diary/hooks/useSearchLocation';

interface DiaryMapMarkerProps {
  userPosition: any;
}
const DiaryMapMarker = ({ userPosition }: DiaryMapMarkerProps) => {
  const { searchKeyword } = useInputRef();
  const { markers, setInfo } = useSearchLocation({
    keyword: searchKeyword,
  });

  const handleMarker = (marker: any) => {
    setInfo(marker);
  };

  return (
    <>
      <MapMarker position={userPosition} />
      {markers.map((marker) => (
        <MapMarker
          key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
          position={marker.position}
          onClick={() => handleMarker(marker)}
        />
      ))}
    </>
  );
};

export default DiaryMapMarker;
