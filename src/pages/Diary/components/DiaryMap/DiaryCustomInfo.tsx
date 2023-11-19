import { CustomOverlayMap } from 'react-kakao-maps-sdk';

interface DiaryCustomInfo {
  info: any;
}

const DiaryCustomInfo = ({ info }: DiaryCustomInfo) => {
  return (
    <CustomOverlayMap position={info.position}>
      <div className="absolute -right-32 bottom-[2.75rem] z-30 flex w-[16rem] flex-col justify-center gap-1 rounded-xl bg-base-white p-4 drop-shadow-xl">
        <p className="text-lg text-base-black">{info.content}</p>
        <p className="text-sm text-grey-400">{info.address}</p>
        <p className="text-sm text-base-secondary">{info.phone}</p>
      </div>
    </CustomOverlayMap>
  );
};

export default DiaryCustomInfo;
