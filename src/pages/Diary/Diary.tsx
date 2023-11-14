import { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useKakaoLoader as useKakaoLoaderOrigin } from 'react-kakao-maps-sdk';
import { DiarySideBar } from '~/pages/Diary/components/DiaryCommon';
import { DiarySideBarProvider } from '~/pages/Diary/contexts/DiarySideBarContext';
import useCurrentLocation from '~/pages/Diary/hooks/useCurrentLoaction';
import useSearchLocation from '~/pages/Diary/hooks/useSearchLoaction';

const Diary = () => {
  const { userPosition } = useCurrentLocation();
  const [teststr, _] = useState('이태원 맛집');
  const { setMap, markers, setInfo, info } = useSearchLocation({
    keyword: teststr,
  });

  useKakaoLoaderOrigin({
    appkey: 'e047e874a0ead765d233c2ba0a20f17b',
    libraries: ['clusterer', 'drawing', 'services'],
  });

  return (
    <div className="h-full w-full">
      <DiarySideBarProvider>
        <DiarySideBar />
      </DiarySideBarProvider>
      <Map
        id="map"
        center={userPosition || { lat: 33.450701, lng: 126.570667 }}
        style={{
          width: '100%',
          height: '100%',
        }}
        level={3}
        onCreate={setMap}
      >
        {markers.map((marker) => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            onClick={() => setInfo(marker)}
          >
            {info && info.content === marker.content && (
              <div style={{ color: 'black' }}>{marker.content}</div>
            )}
          </MapMarker>
        ))}
      </Map>
    </div>
  );
};

export default Diary;
