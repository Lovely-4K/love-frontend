import { CustomOverlayMap } from 'react-kakao-maps-sdk';
import { MapMarker } from '~/types';
import DiaryMarkerData from '~/pages/Diary/components/DiaryCommon/DiaryMarkerData';

interface DiaryCustomInfoProps {
  info: MapMarker;
}

const DiaryCustomInfo = ({ info }: DiaryCustomInfoProps) => {
  return (
    <CustomOverlayMap position={info.position}>
      <div className="absolute -right-32 bottom-[2.75rem] z-30 flex w-[16rem] flex-col justify-center gap-1 rounded-xl bg-base-white p-4 drop-shadow-xl">
        <DiaryMarkerData
          content={info.content}
          address={info.address}
          phone={info.phone}
        />
      </div>
    </CustomOverlayMap>
  );
};

export default DiaryCustomInfo;
