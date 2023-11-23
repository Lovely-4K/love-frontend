import { useContext, useEffect } from 'react';
import { DiaryContext } from '~/pages/Diary/contexts/DiaryContext';
import { DiaryMapContext } from '~/pages/Diary/contexts/DiaryMapContext';

const useCategorySearch = () => {
  const diaryMapContext = useContext(DiaryMapContext);
  const diaryContext = useContext(DiaryContext);

  if (!diaryMapContext) throw new Error('Cannot find diaryMapProvider');
  if (!diaryContext) throw new Error('Cannot find diaryProvider');

  const { mapCategory } = diaryMapContext;
  const { markers, setMarkers, info, setInfo, map, setMap } = diaryContext;

  useEffect(() => {
    if (!map || !mapCategory) return;

    const position = new kakao.maps.services.Places(map);

    // idle 이벤트가 발생했을 때 호출될 함수
    const searchPlaces = () => {
      if (!mapCategory) return;

      setMarkers([]);

      const bounds = new kakao.maps.LatLngBounds();

      let category: 'CE7' | 'FD6' | 'AD5' | 'CT1' | '' = '';

      switch (mapCategory) {
        case 'CAFE':
          category = 'CE7';
          break;
        case 'FOOD':
          category = 'FD6';
          break;
        case 'ACCOMODATION':
          category = 'AD5';
          break;
        case 'CULTURE':
          category = 'CT1';
          break;
      }

      // Bounds를 이용하여 카테고리 검색을 요청
      position.categorySearch(
        category,
        (data, status, _pagination) => {
          if (status === kakao.maps.services.Status.OK) {
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
            }

            setMarkers(markers);
          } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
            // 검색 결과가 없는 경우
          } else if (status === kakao.maps.services.Status.ERROR) {
            // 에러로 인해 검색 결과가 나오지 않은 경우
          }
        },
        { useMapBounds: true, bounds },
      );
    };

    // idle 이벤트가 발생하면 검색을 수행
    kakao.maps.event.addListener(map, 'idle', searchPlaces);

    // 컴포넌트가 언마운트 -> 이벤트 리스너 정리
    return () => {
      kakao.maps.event.removeListener(map, 'idle', searchPlaces);
    };
  }, [map, mapCategory, setMarkers, markers, setMap]);

  return { info, setInfo, markers, setMarkers, map, setMap };
};

export default useCategorySearch;
