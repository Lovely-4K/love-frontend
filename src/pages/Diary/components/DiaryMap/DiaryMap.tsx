import {
  Map,
  useKakaoLoader as useKakaoLoaderOrigin,
} from 'react-kakao-maps-sdk';
import DiaryCustomInfo from './DiaryCustomInfo';
import DiaryMapButtons from './DiaryMapButtons';
import DiaryMapMarker from './DiaryMapMarker';
import useCurrentLocation from '~/pages/Diary/hooks/useCurrentLocation';
import useInfoToggle from '~/pages/Diary/hooks/useInfoToggle';
import useInputRef from '~/pages/Diary/hooks/useInputRef';
import useSearchLocation from '~/pages/Diary/hooks/useSearchLocation';

const DiaryMap = () => {
  const { userPosition } = useCurrentLocation();
  const { searchKeyword } = useInputRef();
  const { setMap, info } = useSearchLocation({
    keyword: searchKeyword,
  });
  const { infoOpen, closeInfo } = useInfoToggle();

  useKakaoLoaderOrigin({
    appkey: 'e047e874a0ead765d233c2ba0a20f17b',
    libraries: ['clusterer', 'drawing', 'services'],
  });

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
        onClick={closeInfo}
      >
        <DiaryMapMarker userPosition={userPosition} />
        {infoOpen && info && <DiaryCustomInfo info={info} />}
        <DiaryMapButtons />
      </Map>
    </>
  );
};

export default DiaryMap;
