import { useEffect } from 'react';
import { CustomOverlayMap } from 'react-kakao-maps-sdk';
import { MapMarker } from '~/types';
import DiaryMarkerData from '~/pages/Diary/components/DiaryCommon/DiaryMarkerData';

interface DiaryCustomInfoProps {
  info: MapMarker;
}

const DiaryCustomInfo = ({ info }: DiaryCustomInfoProps) => {
  useEffect(() => {
    const customOverlayElement = document.querySelector(
      `#customOverlay-${info.spotId}`,
    );

    if (customOverlayElement && customOverlayElement.parentElement) {
      customOverlayElement.parentElement.style.zIndex = '999'; // 원하는 z-index 값으로 수정
    }
  }, [info.spotId]);

  return (
    <CustomOverlayMap
      position={info.position}
      id={`customOverlay-${info.spotId}`}
    >
      <div className="absolute -right-24 bottom-[2.75rem] z-30 min-w-[12rem] rounded-xl bg-base-white p-4 drop-shadow-xl">
        <DiaryMarkerData content={info.content} address={info.address} />
      </div>
    </CustomOverlayMap>
  );
};

export default DiaryCustomInfo;
