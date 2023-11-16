import { MapMarker } from 'react-kakao-maps-sdk';
import DiaryMapInfo from '~/pages/Diary/components/DiaryCommon/DiaryMapInfo';
import useInputRef from '~/pages/Diary/hooks/useInputRef';
import useSearchLocation from '~/pages/Diary/hooks/useSearchLoaction';

const DiaryMapMarker = () => {
  const { searchKeyword } = useInputRef();
  const { markers, setInfo, info } = useSearchLocation({
    keyword: searchKeyword,
  });

  return (
    <>
      {markers.map((marker) => (
        <MapMarker
          key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
          position={marker.position}
          onClick={() => setInfo(marker)}
        >
          {info && info.content === marker.content && (
            <DiaryMapInfo marker={marker} />
          )}
        </MapMarker>
      ))}
    </>
  );
};

export default DiaryMapMarker;
