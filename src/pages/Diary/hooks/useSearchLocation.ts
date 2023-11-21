import { useContext, useEffect } from 'react';
import { DiaryContext } from '~/pages/Diary/contexts/DiaryContext';
import { DiaryMapContext } from '~/pages/Diary/contexts/DiaryMapContext';
import useInputRef from '~/pages/Diary/hooks/useInputRef';

interface useSearchLocationProps {
  keyword: string;
}

const useSearchLocation = ({ keyword }: useSearchLocationProps) => {
  const diaryMapContext = useContext(DiaryMapContext);
  const diaryContext = useContext(DiaryContext);

  if (!diaryMapContext) throw new Error('Cannot find diaryMapProvider');
  if (!diaryContext) throw new Error('Cannot find diaryProvider');

  const { info, setInfo, map, setMap } = diaryMapContext;
  const { markers, setMarkers } = diaryContext;
  const { startSearchMode } = useInputRef();

  useEffect(() => {
    if (!map || !keyword) return;

    const position = new kakao.maps.services.Places();

    position.keywordSearch(
      keyword,
      (data: kakao.maps.services.PlacesSearchResult, status, _pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          // 검색 장소 기준으로 지도 범위를 재설정위해 LatLngBounds 객체에 좌표 추가
          const bounds = new kakao.maps.LatLngBounds();
          const markers = [];

          for (let i = 0; i < data.length; i++) {
            markers.push({
              position: {
                lat: Number(data[i].y),
                lng: Number(data[i].x),
              },
              content: data[i].place_name,
              address: data[i].address_name,
              phone: data[i].phone,
              spotId: data[i].id,
            });

            bounds.extend(
              new kakao.maps.LatLng(Number(data[i].y), Number(data[i].x)),
            );
          }

          setMarkers(markers);
          map.setBounds(bounds); // 검색된 장소 위치를 기준으로 지도 범위를 재설정

          startSearchMode();
        }
      },
    );
  }, [map, keyword, setMarkers]);

  return { info, setInfo, markers, setMarkers, map, setMap };
};

export default useSearchLocation;
