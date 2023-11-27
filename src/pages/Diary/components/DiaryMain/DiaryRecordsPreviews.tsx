import { DiaryPreviewItem } from '~/components/domain';
import useDiary from '~/pages/Diary/hooks/Diary/useDiary';
import useSelectCategory from '~/pages/Diary/hooks/Diary/useSelectCategory';
import useSelectSortMethod from '~/pages/Diary/hooks/Diary/useSelectSortMethod';
import useGetDiarys from '~/services/diary/useGetDiarys';

const DiaryRecordsPreviews = () => {
  const {
    methods: { handleClickPreviews },
  } = useDiary();
  const { selectCategory } = useSelectCategory();
  const { selectSortMethod } = useSelectSortMethod();
  const { handleClickPreview } = handleClickPreviews;
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
