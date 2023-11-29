import { MapMarker } from 'react-kakao-maps-sdk';
import { UserPosition } from '~/types';
import useDiaryContext from '~/pages/Diary/hooks/Diary/useDiaryContext';
import useDiaryToMarker from '~/pages/Diary/hooks/Diary/useDiarytoMarker';
import useDiaryMap from '~/pages/Diary/hooks/DiaryMap/useDiaryMap';

/** @todo: 추후 내 위치 마커와 장소 표시 마커 분리시키기 */
const DiaryMapMarker = ({ userPosition }: UserPosition) => {
  const {
    diarys,
    searchKeyword,
    markers,
    methods: { handleMarkers, handleSearch },
  } = useDiaryContext();
  const { useSearchLocation } = handleSearch;
  useSearchLocation(searchKeyword);
  const { handleMarker } = handleMarkers;
  const diaryMarkers = useDiaryToMarker({ diarys });
  const { yetMarkers, goneMarkers } = useDiaryMap();

  return (
    <>
      {/* 내 위치 마커 */}
      <MapMarker
        position={userPosition}
        image={{
          src: '/src/assets/icons/currentMarker.svg',
          size: {
            width: 55,
            height: 55,
          },
        }}
      />
      {/* 다이어리 목록 마커 */}
      {markers.length ||
        diaryMarkers?.map((marker, index) => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}-${index}`}
            position={marker.position}
            onClick={() => handleMarker(marker)}
            image={{
              src: '/src/assets/icons/mapMarkerGone.svg',
              size: {
                width: 35,
                height: 40,
              },
            }}
          />
        ))}
      {/* 안 가본 곳 */}
      {yetMarkers.map((marker) => (
        <MapMarker
          key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
          position={marker.position}
          onClick={() => handleMarker(marker)}
          image={{
            src: '/src/assets/icons/mapMarkerYet.svg',
            size: {
              width: 35,
              height: 40,
            },
          }}
        />
      ))}
      {/* 가본 곳 */}
      {goneMarkers.map((marker) => (
        <MapMarker
          key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
          position={marker.position}
          onClick={() => handleMarker(marker)}
          image={{
            src: '/src/assets/icons/mapMarkerGone.svg',
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
