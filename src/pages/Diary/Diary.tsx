import { Map } from 'react-kakao-maps-sdk';
import { useKakaoLoader as useKakaoLoaderOrigin } from 'react-kakao-maps-sdk';
import { DiarySideBar } from '~/pages/Diary/components/DiaryCommon';
import { DiarySideBarProvider } from '~/pages/Diary/contexts/DiarySideBarContext';
import useCurrentLocation from '~/pages/Diary/hooks/useCurrentLoaction';

const Diary = () => {
  const { userPosition } = useCurrentLocation();

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
      />
    </div>
  );
};

export default Diary;
