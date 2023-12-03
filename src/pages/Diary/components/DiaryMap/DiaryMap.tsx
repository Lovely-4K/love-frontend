import {
  Map,
  useKakaoLoader as useKakaoLoaderOrigin,
} from 'react-kakao-maps-sdk';
import DiaryCustomInfo from './DiaryCustomInfo';
import DiaryMapButtons from './DiaryMapButtons';
import DiaryMapMarker from './DiaryMapMarker';
import DiaryMapCategories from '~/pages/Diary/components/DiaryMap/DiaryMapCategories';
import useDiaryContext from '~/pages/Diary/hooks/Diary/useDiaryContext';

const DiaryMap = () => {
  const {
    infoOpen,
    searchKeyword,
    info,
    setMap,
    methods: { handleMapCategories, handleInfo, handleLocation, handleSearch },
  } = useDiaryContext();
  const { useCurrentLocation } = handleLocation;
  const { userPosition } = useCurrentLocation();
  const { useCategorySearch } = handleMapCategories;
  useCategorySearch();
  const { useSearchLocation } = handleSearch;
  useSearchLocation(searchKeyword);
  const { closeInfo } = handleInfo;

  useKakaoLoaderOrigin({
    appkey: 'e047e874a0ead765d233c2ba0a20f17b',
    libraries: ['clusterer', 'drawing', 'services'],
  });

  return (
    <Map
      id="map"
      center={userPosition || { lat: 37.5759, lng: 126.9768 }}
      style={{
        width: '100%',
        height: '100%',
      }}
      level={3}
      onCreate={setMap}
      onClick={closeInfo}
    >
      {userPosition && <DiaryMapMarker userPosition={userPosition} />}
      {infoOpen && info && userPosition && <DiaryCustomInfo info={info} />}
      <DiaryMapButtons />
      <DiaryMapCategories />
    </Map>
  );
};

export default DiaryMap;
