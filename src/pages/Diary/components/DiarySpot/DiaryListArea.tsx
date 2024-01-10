import { useAtomValue } from 'jotai';
import { useParams } from 'react-router-dom';
import DiaryNotContent from './DiaryNotContent';
import DiarySpotPreviews from './DiarySpotPreviews';
import useGetSpotDiarys from '~/services/diary/useGetSpotDiarys';
import { infoAtom } from '~/stores/diaryAtoms';

const DiaryListArea = () => {
  const params = useParams();
  const info = useAtomValue(infoAtom);

  if (info === undefined || info.spotId !== params.spotId) {
    throw new Error('앗! 유효하지 않은 접근이에요!');
  }

  const { data: spotDiaries } = useGetSpotDiarys({
    kakaoMapId: Number(info.spotId),
  });

  return spotDiaries ? (
    <DiarySpotPreviews spotDiaries={spotDiaries} />
  ) : (
    <DiaryNotContent />
  );
};

export default DiaryListArea;
