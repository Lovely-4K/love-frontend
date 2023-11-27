import { useParams } from 'react-router-dom';
import DiaryNotContent from './DiaryNotContent';
import DiarySpotPreviews from './DiarySpotPreviews';
import useGetSpotDiarys from '~/services/diarys/useGetSpotDiarys';

const DiaryListArea = () => {
  const { spotId } = useParams();
  const { data: spotDiarys, isSuccess } = useGetSpotDiarys({
    kakaoMapId: Number(spotId),
  });

  if (!isSuccess) return;

  return spotDiarys.diaries ? (
    <DiarySpotPreviews spotDiarys={spotDiarys} />
  ) : (
    <DiaryNotContent />
  );
};

export default DiaryListArea;
