import { useEffect, useState } from 'react';

interface useSearchLocationProps {
  keyword: string;
}

const useSearchLocation = ({ keyword }: useSearchLocationProps) => {
  const [info, setInfo] = useState<any>(undefined);
  const [markers, setMarkers] = useState<Array<any>>([]);
  const [map, setMap] = useState<any>(undefined);

  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(keyword, (data: any, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();
        const markers = [];

        for (let i = 0; i < data.length; i++) {
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });

          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    });
  }, [map]);

  return { info, setInfo, markers, setMarkers, map, setMap };
};

export default useSearchLocation;
