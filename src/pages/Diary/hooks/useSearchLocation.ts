import { useContext, useEffect } from 'react';
import { DiaryMapContext } from '~/pages/Diary/contexts/DiaryMapContext';

interface useSearchLocationProps {
  keyword: string;
}

const useSearchLocation = ({ keyword }: useSearchLocationProps) => {
  const { info, setInfo, markers, setMarkers, map, setMap } =
    useContext(DiaryMapContext);

  useEffect(() => {
    if (!map) return;

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(
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
            });

            bounds.extend(
              new kakao.maps.LatLng(Number(data[i].y), Number(data[i].x)),
            );
          }

          setMarkers(markers);
          map.setBounds(bounds); // 검색된 장소 위치를 기준으로 지도 범위를 재설정
        }
      },
    );
  }, [map, keyword, setMarkers]);

  return { info, setInfo, markers, setMarkers, map, setMap };
};

export default useSearchLocation;