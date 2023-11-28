import { Diarys } from '~/types';
// import useDiary from '~/pages/Diary/hooks/Diary/useDiary';

interface useDiaryToMarkerProps {
  diarys: Diarys | undefined;
}

const useDiaryToMarker = ({ diarys }: useDiaryToMarkerProps) => {
  // const { diaryMarkers, setDiaryMarkers } = useDiary();

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

  // setDiaryMarkers(markers);

  return markers;
};

export default useDiaryToMarker;
