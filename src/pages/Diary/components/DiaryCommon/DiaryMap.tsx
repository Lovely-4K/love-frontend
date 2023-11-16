import { useState } from 'react';
import { CustomOverlayMap, Map } from 'react-kakao-maps-sdk';
import { useKakaoLoader as useKakaoLoaderOrigin } from 'react-kakao-maps-sdk';
import { CurrentMarker, SelectCurrentBtn } from '~/assets/icons';
import DiaryMapMarker from '~/pages/Diary/components/DiaryCommon/DiaryMapMarker';
import useCurrentLocation from '~/pages/Diary/hooks/useCurrentLoaction';
import useInputRef from '~/pages/Diary/hooks/useInputRef';
import useSearchLocation from '~/pages/Diary/hooks/useSearchLocation';

const DiaryMap = () => {
  const { userPosition, setCenter } = useCurrentLocation();
  const { searchKeyword } = useInputRef();
  const { setMap, info } = useSearchLocation({
    keyword: searchKeyword,
  });

  useKakaoLoaderOrigin({
    appkey: 'e047e874a0ead765d233c2ba0a20f17b',
    libraries: ['clusterer', 'drawing', 'services'],
  });

  const [isOpen, setIsOpen] = useState(true);

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
        <DiaryMapMarker userPosition={userPosition} />
        {isOpen && info && (
          <CustomOverlayMap position={info.position}>
            <div className="absolute -right-32 bottom-[2.75rem] z-30 flex w-[16rem] flex-col justify-center gap-1 rounded-xl bg-base-white p-4 drop-shadow-xl">
              <p className="text-lg text-base-black">{info.content}</p>
              <p className="text-sm text-grey-400">{info.address}</p>
              <p className="text-sm text-base-secondary">{info.phone}</p>
            </div>
          </CustomOverlayMap>
        )}
        <button className="absolute right-4 top-4 z-50 ">
          <SelectCurrentBtn className="h-12" onClick={setCenter} />
        </button>
      </Map>
    </>
  );
};

export default DiaryMap;
