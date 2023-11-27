import useDiarySpotContext from '../../hooks/useDiarySpotContext';
import DiaryNotContent from './DiaryNotContent';
import DiarySpotPreviews from './DiarySpotPreviews';

const DiaryListArea = () => {
  const diarySpotContext = useDiarySpotContext();
  const { spotDiaries } = diarySpotContext;

  return spotDiaries.diaries ? (
    <DiarySpotPreviews spotDiaries={spotDiaries} />
  ) : (
    <DiaryNotContent />
  );
};

export default DiaryListArea;
