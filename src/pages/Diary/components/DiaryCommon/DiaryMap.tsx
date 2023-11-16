import { useContext, useState } from 'react';
import { CustomOverlayMap, Map } from 'react-kakao-maps-sdk';
import { useKakaoLoader as useKakaoLoaderOrigin } from 'react-kakao-maps-sdk';
import DiaryMapMarker from '~/pages/Diary/components/DiaryCommon/DiaryMapMarker';
import { DiaryMapContext } from '~/pages/Diary/contexts/DiaryMapContext';
import useCurrentLocation from '~/pages/Diary/hooks/useCurrentLoaction';
import useInputRef from '~/pages/Diary/hooks/useInputRef';
import useSearchLocation from '~/pages/Diary/hooks/useSearchLocation';

const DiaryMap = () => {
  const { userPosition } = useCurrentLocation();
  const { searchKeyword } = useInputRef();
  const { setMap } = useSearchLocation({
    keyword: searchKeyword,
  });

  useKakaoLoaderOrigin({
    appkey: 'e047e874a0ead765d233c2ba0a20f17b',
    libraries: ['clusterer', 'drawing', 'services'],
  });

  const [isOpen, setIsOpen] = useState(true);

  const markerPosition = {
    lat: 33.450701,
    lng: 126.570667,
  };

  const { info } = useContext(DiaryMapContext);

  return (
    <>
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
        <DiaryMapMarker />
        {isOpen && info && (
          <CustomOverlayMap position={info.position}>
            <div className="overlay absolute -right-32 bottom-[2.75rem] h-[6rem] w-[16rem] rounded-xl bg-base-white p-4">
              <p>{info.content}</p>
              <p>{info.address}</p>
              <p>{info.phone}</p>
            </div>
          </CustomOverlayMap>
        )}
      </Map>
    </>
  );
};

export default DiaryMap;
