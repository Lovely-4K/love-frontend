import { MapMarker } from 'react-kakao-maps-sdk';
import useHandleMarker from '~/pages/Diary/hooks/useHandleMarker';
import useInputRef from '~/pages/Diary/hooks/useInputRef';
import useSearchLocation from '~/pages/Diary/hooks/useSearchLocation';

interface DiaryMapMarkerProps {
  userPosition: any;
}
const DiaryMapMarker = ({ userPosition }: DiaryMapMarkerProps) => {
  const { searchKeyword } = useInputRef();
  const { markers } = useSearchLocation({
    keyword: searchKeyword,
  });
  const { handleMarker } = useHandleMarker();

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
          },
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
            },
          }}
        />
      ))}
    </>
  );
};

export default DiaryMapMarker;
