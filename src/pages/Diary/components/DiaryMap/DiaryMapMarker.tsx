import { MapMarker } from 'react-kakao-maps-sdk';
import { UserPosition } from '~/types';
import useDiaryContext from '~/pages/Diary/hooks/Diary/useDiaryContext';
import useDiaryToMarker from '~/pages/Diary/hooks/Diary/useDiarytoMarker';
import useDiaryMap from '~/pages/Diary/hooks/DiaryMap/useDiaryMap';

/** @todo: 추후 내 위치 마커와 장소 표시 마커 분리시키기 */
const DiaryMapMarker = ({ userPosition }: UserPosition) => {
  const {
    rootDiarys,
    searchKeyword,
    mapCategory,
    methods: { handleMarkers, handleSearch },
  } = useDiaryContext();
  const { useSearchLocation } = handleSearch;
  useSearchLocation(searchKeyword);
  const { handleMarker } = handleMarkers;
  const diaryMarkers = useDiaryToMarker({ rootDiarys });
  const { yetMarkers, goneMarkers } = useDiaryMap();

  return (
    <>
      {/* 내 위치 마커 */}
      {userPosition && (
        <MapMarker
          position={userPosition}
          image={{
            src: '/images/currentMarker.svg',
            size: {
              width: 55,
              height: 55,
            },
          }}
        />
      )}
      {/* 다이어리 목록 마커 */}
      {!mapCategory && !searchKeyword && (
        <div>
          {diaryMarkers?.map((marker, index) => (
            <MapMarker
              key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}-${index}`}
              position={marker.position}
              onClick={() => handleMarker(marker)}
              image={{
                src: '/images/mapMarkerGone.svg',
                size: {
                  width: 35,
                  height: 40,
                },
              }}
            />
          ))}
        </div>
      )}
      {/* 안 가본 곳 */}
      {(searchKeyword || mapCategory) &&
        yetMarkers.map((marker) => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            onClick={() => handleMarker(marker)}
            image={{
              src: '/images/mapMarkerYet.svg',
              size: {
                width: 35,
                height: 40,
              },
            }}
          />
        ))}
      {/* 가본 곳 */}
      {(searchKeyword || mapCategory) &&
        goneMarkers.map((marker) => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            onClick={() => handleMarker(marker)}
            image={{
              src: '/images/mapMarkerGone.svg',
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
