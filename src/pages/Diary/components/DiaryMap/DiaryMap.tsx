import {
  Map,
  useKakaoLoader as useKakaoLoaderOrigin,
} from 'react-kakao-maps-sdk';
import DiaryCustomInfo from './DiaryCustomInfo';
import DiaryMapButtons from './DiaryMapButtons';
import DiaryMapMarker from './DiaryMapMarker';
import DiaryMapCategories from '~/pages/Diary/components/DiaryMap/DiaryMapCategories';
import useCategorySearch from '~/pages/Diary/hooks/Diary/useCategorySearch';
import useCurrentLocation from '~/pages/Diary/hooks/Diary/useCurrentLocation';
import useDiary from '~/pages/Diary/hooks/Diary/useDiary';
import useInputRef from '~/pages/Diary/hooks/Diary/useInputRef';
import useSearchLocation from '~/pages/Diary/hooks/Diary/useSearchLocation';

const DiaryMap = () => {
  const { userPosition } = useCurrentLocation();
  const { searchKeyword } = useInputRef();
  useCategorySearch();
  const { info, setMap } = useSearchLocation({
    keyword: searchKeyword,
  });

  const { methods, infoOpen } = useDiary();
  const { closeInfo } = methods.handleInfo;

  useKakaoLoaderOrigin({
    appkey: 'e047e874a0ead765d233c2ba0a20f17b',
    libraries: ['clusterer', 'drawing', 'services'],
  });

  if (!userPosition) return;

  return (
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
      <DiaryMapCategories />
    </Map>
  );
};

export default DiaryMap;
