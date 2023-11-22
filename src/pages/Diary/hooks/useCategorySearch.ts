import { useContext, useEffect } from 'react';
import { DiaryContext } from '~/pages/Diary/contexts/DiaryContext';
import { DiaryMapContext } from '~/pages/Diary/contexts/DiaryMapContext';
import useInputRef from '~/pages/Diary/hooks/useInputRef';

const useCategorySearch = () => {
  const diaryMapContext = useContext(DiaryMapContext);
  const diaryContext = useContext(DiaryContext);

  if (!diaryMapContext) throw new Error('Cannot find diaryMapProvider');
  if (!diaryContext) throw new Error('Cannot find diaryProvider');

  const { info, setInfo, map, setMap, mapCategory } = diaryMapContext;
  const { markers, setMarkers } = diaryContext;

  const {} = useInputRef();

  useEffect(() => {
    if (!map || !mapCategory) return;

    const newLatLng = map.getCenter();

    const tmpLatLng = new kakao.maps.LatLng(
      newLatLng.getLat() + 0.0001,
      newLatLng.getLng() + 0.0001,
    );
    // console.log(tmpLatLng);

    const position = new kakao.maps.services.Places(map);

    // idle 이벤트가 발생했을 때 호출될 함수
    const searchPlaces = () => {
      if (!mapCategory) {
        return;
      }

      setMarkers([]);

      // 현재 지도의 Bounds를 얻어옵니다
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
            // 정상적으로 검색이 완료됐으면 지도에 마커를 표출합니다

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
            // map.setCenter(newLatLng);
            setMarkers(markers);
          } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
            // 검색 결과가 없는 경우의 처리를 여기에 추가할 수 있습니다
          } else if (status === kakao.maps.services.Status.ERROR) {
            // 에러로 인해 검색 결과가 나오지 않은 경우의 처리를 여기에 추가할 수 있습니다
          }
        },
        { useMapBounds: true, bounds },
      );
    };

    // setMap();

    // idle 이벤트가 발생하면 검색을 수행합니다
    kakao.maps.event.addListener(map, 'idle', searchPlaces);

    // 컴포넌트가 언마운트되면 이벤트 리스너를 정리합니다
    return () => {
      kakao.maps.event.removeListener(map, 'idle', searchPlaces);
    };
  }, [map, mapCategory, setMarkers, markers, setMap]); // 의존성 배열에 필요한 변수들을 넣어줍니다

  // 이 훅이 필요한 상태나 함수 등을 반환합니다
  return { info, setInfo, markers, setMarkers, map, setMap };
};

export default useCategorySearch;
