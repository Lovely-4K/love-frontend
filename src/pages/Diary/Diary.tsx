import { Map } from 'react-kakao-maps-sdk';
import { useKakaoLoader as useKakaoLoaderOrigin } from 'react-kakao-maps-sdk';
import { DiarySideBar } from '~/pages/Diary/components/DiaryCommon';
import { DiarySideBarProvider } from '~/pages/Diary/contexts/DiarySideBarContext';

const Diary = () => {
  useKakaoLoaderOrigin({
    appkey: 'e047e874a0ead765d233c2ba0a20f17b',
    libraries: ['clusterer', 'drawing', 'services'],
  });

  return (
    <div className="h-full w-full">
      <DiarySideBarProvider>
        <DiarySideBar />
      </DiarySideBarProvider>
      <Map // 지도를 표시할 Container
        id="map"
        center={{
          // 지도의 중심좌표
          lat: 33.450701,
          lng: 126.570667,
        }}
        style={{
          // 지도의 크기
          width: '100%',
          height: '350px',
        }}
        level={3} // 지도의 확대 레벨
      />
    </div>
  );
};

export default Diary;
