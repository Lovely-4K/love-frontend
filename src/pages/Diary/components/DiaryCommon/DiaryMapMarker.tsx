import { useState } from 'react';
import { CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk';
import { MapMarkerGone } from '~/assets/icons';
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

  if (!userPosition) return;

  return (
    <>
      <MapMarker
        position={userPosition}
        image={{
          src: 'src/assets/icons/currentMarker.svg',
          size: {
            width: 40,
            height: 65,
          }, // 마커이미지의 크기입니다
        }}
      />
      {markers.map((marker) => (
        <MapMarker
          key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
          position={marker.position}
          onClick={() => handleMarker(marker)}
          image={{
            src: 'src/assets/icons/mapMarkerGone.svg',
            size: {
              width: 35,
              height: 40,
            }, // 마커이미지의 크기입니다
          }}
        />
      ))}
    </>
  );
};

export default DiaryMapMarker;
