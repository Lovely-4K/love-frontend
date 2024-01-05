import { useAtomValue, useSetAtom } from 'jotai';
import {
  Map,
  useKakaoLoader as useKakaoLoaderOrigin,
} from 'react-kakao-maps-sdk';
import DiaryCustomInfo from './DiaryCustomInfo';
import DiaryMapButtons from './DiaryMapButtons';
import DiaryMapMarker from './DiaryMapMarker';
import DiaryMapCategories from '~/pages/Diary/components/DiaryMap/DiaryMapCategories';
import useMapLocation from '~/pages/Diary/hooks/Diary/useCurrentLocation';
import useInfoToggle from '~/pages/Diary/hooks/Diary/useInfoToggle';
import useMapCategory from '~/pages/Diary/hooks/Diary/useMapCategory';
import useSearch from '~/pages/Diary/hooks/Diary/useMapLocation';
import {
  infoAtom,
  infoOpenAtom,
  mapAtom,
  searchKeywordAtom,
} from '~/stores/diaryAtoms';

const DiaryMap = () => {
  const searchKeyword = useAtomValue(searchKeywordAtom);
  const info = useAtomValue(infoAtom);
  const infoOpen = useAtomValue(infoOpenAtom);
  const setMap = useSetAtom(mapAtom);

  const { useCurrentLocation } = useMapLocation();
  const { userPosition } = useCurrentLocation();
  const { useCategorySearch } = useMapCategory();
  useCategorySearch();
  const { useSearchLocation } = useSearch();
  useSearchLocation(searchKeyword);
  const { closeInfo } = useInfoToggle();

  useKakaoLoaderOrigin({
    appkey: '7a4be6748e8ae03e1c1fb309117bc067',
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
      <DiaryMapMarker userPosition={userPosition} />
      {infoOpen && info && <DiaryCustomInfo info={info} />}
      <DiaryMapButtons />
      <DiaryMapCategories />
    </Map>
  );
};

export default DiaryMap;
