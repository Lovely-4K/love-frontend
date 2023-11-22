import DiaryNotContent from './DiaryNotContent';
import DiarySpotPreviews from './DiarySpotPreviews';
import useGetSpotDiarys from '~/services/diary/useGetSpotDiarys';

const DiaryListArea = () => {
  const { data: spotDiarys, isSuccess } = useGetSpotDiarys({ kakaoMapId: 10 });

  if (!isSuccess) return;

  return spotDiarys.diaries.length ? (
    <DiarySpotPreviews spotDiarys={spotDiarys} />
  ) : (
    <DiaryNotContent />
  );
};

export default DiaryListArea;
