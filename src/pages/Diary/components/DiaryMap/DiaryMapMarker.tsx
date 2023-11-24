import { MapMarker } from 'react-kakao-maps-sdk';
import { UserPosition } from '~/types';
import useDiaryToMarker from '~/pages/Diary/hooks/useDiarytoMarker';
import useFilterMarker from '~/pages/Diary/hooks/useFilterMarker';
import useGetDiarys from '~/pages/Diary/hooks/useGetDiarys';
import useHandleMarker from '~/pages/Diary/hooks/useHandleMarker';
import useInputRef from '~/pages/Diary/hooks/useInputRef';
import useSearchLocation from '~/pages/Diary/hooks/useSearchLocation';

const DiaryMapMarker = ({ userPosition }: UserPosition) => {
  const { searchKeyword } = useInputRef();
  const { markers } = useSearchLocation({
    keyword: searchKeyword,
  });
  const { handleMarker } = useHandleMarker();
  const { data: diarys, isSuccess } = useGetDiarys();
  const diaryMarkers = useDiaryToMarker({ diarys });
  const { handleFilterMarker } = useFilterMarker();

  if (!userPosition || !isSuccess || !diarys) return;

  const diaryContent = diarys.content;
  const filterType = 'GONE';

  const testData = handleFilterMarker({ markers, diaryContent, filterType });

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
      {diaryMarkers?.map((marker) => (
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
      {/* 일반 마커 */}
      {testData.map((marker) => (
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
