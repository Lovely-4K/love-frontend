import { useState } from 'react';
import { CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk';
import DiaryMapInfo from '~/pages/Diary/components/DiaryCommon/DiaryMapInfo';
import useInputRef from '~/pages/Diary/hooks/useInputRef';
import useSearchLocation from '~/pages/Diary/hooks/useSearchLocation';

const DiaryMapMarker = () => {
  const { searchKeyword } = useInputRef();
  const { markers, setInfo } = useSearchLocation({
    keyword: searchKeyword,
  });

  const handleMarker = (marker: any) => {
    setInfo(marker);
  };

  return (
    <>
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
