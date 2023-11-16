import { useContext, useEffect } from 'react';
import { DiaryMapContext } from '~/pages/Diary/contexts/DiaryMapContext';

interface DiaryMapInfoProps {
  marker: any;
}

const DiaryMapInfo = ({ marker }: DiaryMapInfoProps) => {
  const { kakao } = window;
  const { map } = useContext(DiaryMapContext);

  // useEffect(() => {
  //   if (marker) {
  //     console.log(marker.position);
  //     const position = new kakao.maps.LatLng(
  //       marker.position.lat,
  //       marker.position.lng,
  //     );

  //     const content = `<div className="rounded-xl p-5 pb-12">
  //           <p>{marker.content}</p>
  //           <p>{marker.address}</p>
  //           <p>{marker.phone}</p>
  //         </div>
  //         `;

  //     const overlay = new kakao.maps.CustomOverlay({
  //       content: content,
  //       map: map,
  //       position: position,
  //       zIndex: 10,
  //     });

  //     kakao.maps.event.addListener(marker, 'click', function () {
  //       overlay.setMap(map);
  //     });

  //     kakao.maps.event.addListener(map, 'click', function () {
  //       overlay.setMap(null);
  //     });
  //   }
  // }, []);

  return (
    <div className="rounded-xl p-5 pb-12">
      <p>{marker.content}</p>
      <p>{marker.address}</p>
      <p>{marker.phone}</p>
    </div>
  );
};

export default DiaryMapInfo;
