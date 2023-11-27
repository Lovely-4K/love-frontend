import { DiaryPreviewItem } from '~/components/domain';
import useDiary from '~/pages/Diary/hooks/Diary/useDiary';

import useGetDiarys from '~/services/diary/useGetDiarys';

const DiaryRecordsPreviews = () => {
  const {
    diaryCategory,
    selectSortMethod,
    methods: { handleClickPreviews },
  } = useDiary();

  const { handleClickPreview } = handleClickPreviews;
  const { data: diarys, isSuccess } = useGetDiarys({
    selectSortMethod,
    diaryCategory,
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
