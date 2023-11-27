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
    <div className="grid grid-cols-2 justify-items-center md:gap-x-4">
      {diarys.content.map((diary) => (
        <DiaryPreviewItem
          key={diary.diaryId}
          date={diary.datingDay}
          location={diary.placeName}
          imgSrc={diary.imageUrl}
          onClick={() => handleClickPreview(diary)}
        />
      ))}
    </div>
  );
};

export default DiaryRecordsPreviews;
