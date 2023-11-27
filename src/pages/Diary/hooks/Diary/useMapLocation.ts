import { useEffect } from 'react';
import useDiary from '~/pages/Diary/hooks/Diary/useDiary';

interface useSearchLocationProps {
  keyword: string;
}

const useSearchLocation = ({ keyword }: useSearchLocationProps) => {
  const {
    markers,
    setMarkers,
    info,
    setInfo,
    map,
    setMap,
    searchKeyword,
    methods: { handleInput, handleMapCategories, handleLocation },
  } = useDiary();
  const { startSearchMode, setSearchKeyword } = handleInput;
  const { resetMapCategory } = handleMapCategories;
  const { useCurrentLocation } = handleLocation;
  const { userPosition } = useCurrentLocation();

  useEffect(() => {
    if (!map || !keyword) return;
    if (!userPosition) return;

    // 거리순 으로 데이터 정렬
    // const newLatLng = new kakao.maps.LatLng(userPosition.lat, userPosition.lng); // 현재 내위치
    // const options = {
    //   location: newLatLng,
    //   radius: 10000,
    //   sort: kakao.maps.services.SortBy.DISTANCE,
    // };

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

          resetMapCategory();
          setSearchKeyword(keyword);
          setMarkers(markers);
          map.setBounds(bounds); // 검색된 장소 위치를 기준으로 지도 범위를 재설정
          startSearchMode();
        }
      },
      // options,
    );
  }, [map, keyword, setMarkers, searchKeyword, setSearchKeyword]);

  return { info, setInfo, markers, setMarkers, map, setMap };
};

export default useSearchLocation;
