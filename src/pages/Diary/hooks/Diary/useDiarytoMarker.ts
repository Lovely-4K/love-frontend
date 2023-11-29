import type { DiaryContent } from '~/types';

interface useDiaryToMarkerProps {
  rootDiarys: DiaryContent[] | undefined;
}

const useDiaryToMarker = ({ rootDiarys }: useDiaryToMarkerProps) => {
  if (!rootDiarys) return;

  const markers = [];

  for (const diary of rootDiarys) {
    const info = {
      position: {
        lat: diary.latitude,
        lng: diary.longitude,
      },
      content: diary.placeName,
      address: diary.address,
      spotId: String(diary.kakaoMapId),
    };

    markers.push(info);
  }

  return markers;
};

export default useDiaryToMarker;
