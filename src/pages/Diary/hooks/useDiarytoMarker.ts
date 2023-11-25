import { Diarys } from '~/types';

interface useDiaryToMarkerProps {
  diarys: Diarys | undefined;
}

const useDiaryToMarker = ({ diarys }: useDiaryToMarkerProps) => {
  if (!diarys) return;

  const markers = [];

  for (const diary of diarys.content) {
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
