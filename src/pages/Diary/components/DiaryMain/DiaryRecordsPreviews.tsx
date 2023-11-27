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
    <div className="flex w-full flex-wrap justify-center gap-2">
      {diarys.content.map((diary) => (
        <div className="flex items-center justify-center md:max-w-[45%]">
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
  );
};

export default DiaryRecordsPreviews;
