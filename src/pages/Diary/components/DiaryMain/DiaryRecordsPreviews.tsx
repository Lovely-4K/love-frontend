import { DiaryPreviewItem } from '~/components/domain';
import useClickPreview from '~/pages/Diary/hooks/useClickPreview';
import useSelectCategory from '~/pages/Diary/hooks/useSelectCategory';
import useSelectSortMethod from '~/pages/Diary/hooks/useSelectSortMethod';
import useGetDiarys from '~/services/diary/useGetDiarys';

const DiaryRecordsPreviews = () => {
  const { selectCategory } = useSelectCategory();
  const { selectSortMethod } = useSelectSortMethod();
  const { handleClickPreview } = useClickPreview();
  const { data: diarys, isSuccess } = useGetDiarys({
    selectSortMethod,
    selectCategory,
  });

  if (!isSuccess) return;

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
