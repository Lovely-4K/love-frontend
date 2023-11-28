import useDiaryContext from '../../hooks/Diary/useDiaryContext';
import { DiaryPreviewItem } from '~/components/domain';

const DiaryRecordsPreviews = () => {
  const {
    diarys,
    methods: { handleClickPreviews },
  } = useDiaryContext();
  const { handleClickPreview } = handleClickPreviews;

  return (
    <div>
      <div className="grid grid-cols-3 md:grid-cols-2">
        {diarys.content.map((diary) => (
          <div className="m-2">
            <DiaryPreviewItem
              key={diary.diaryId}
              date={diary.datingDay}
              location={diary.placeName}
              imgSrc={diary.imageUrl}
              onClick={() => handleClickPreview(diary)}
            />
          </div>
        ))}
      </div>
      <div className="flex w-full items-center justify-center py-3 text-sm text-grey-400">
        {diarys.content.length === 0 &&
          '아직 아무 다이어리도 작성하지 않았어요!'}
      </div>
    </div>
  );
};

export default DiaryRecordsPreviews;
