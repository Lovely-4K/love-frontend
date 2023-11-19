import { MapMarker } from 'react-kakao-maps-sdk';
import useHandleMarker from '~/pages/Diary/hooks/useHandleMarker';
import useInputRef from '~/pages/Diary/hooks/useInputRef';
import useSearchLocation from '~/pages/Diary/hooks/useSearchLocation';
import { UserPosition } from '~/types/map';

const DiaryMapMarker = ({ userPosition }: UserPosition) => {
  const { searchKeyword } = useInputRef();
  const { markers } = useSearchLocation({
    keyword: searchKeyword,
  });
  const { handleMarker } = useHandleMarker();

  if (!userPosition) return;

  return (
    <>
      {/* 내 위치 마커 */}
      <MapMarker
        position={userPosition}
        image={{
          src: 'src/assets/icons/currentMarker.svg',
          size: {
            width: 55,
            height: 55,
          },
        }}
      />
      {/* 다이어리 마커 */}
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
            },
          }}
        />
      ))}
    </>
  );
};

export default DiaryMapMarker;