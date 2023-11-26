import { useContext, useEffect } from 'react';
import { DiaryContext } from '~/pages/Diary/contexts/DiaryContext';
import useInputRef from '~/pages/Diary/hooks/useInputRef';

const useCategorySearch = () => {
  const diaryContext = useContext(DiaryContext);

  if (!diaryContext) throw new Error('Cannot find diaryProvider');

  const { markers, setMarkers, info, setInfo, map, setMap, mapCategory } =
    diaryContext;
  const { categorySearchMode } = useInputRef();

  const searchPlaces = () => {
    if (!map || !mapCategory) return;

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

    const position = new kakao.maps.services.Places(map);

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

          categorySearchMode();
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

  // category가 바뀔 때 (지도 이동 x)
  useEffect(() => {
    searchPlaces();
  }, [mapCategory, map]);

  // idle 이벤트 (지도 이동)
  useEffect(() => {
    if (!map) return;

    kakao.maps.event.addListener(map, 'idle', searchPlaces);

    return () => {
      kakao.maps.event.removeListener(map, 'idle', searchPlaces);
    };
  }, [map, mapCategory]);

  return { info, setInfo, markers, setMarkers, map, setMap, mapCategory };
};

export default useCategorySearch;
