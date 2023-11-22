import { DiaryPreviewItem } from '~/components/domain';
import useClickPreview from '~/pages/Diary/hooks/useClickPreview';
import useGetDiarys from '~/pages/Diary/hooks/useGetDiarys';
import useSelectCategory from '~/pages/Diary/hooks/useSelectCategory';
import useSelectSortMethod from '~/pages/Diary/hooks/useSelectSortMethod';

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
      {/* <DiaryPreviewItem
        date={'2023월 09월 05일'}
        location={'카페 녹다'}
        imgSrc={'https://picsum.photos/200'}
      />
      <DiaryPreviewItem
        date={'2023월 09월 05일'}
        location={'카페 녹다'}
        imgSrc={'https://picsum.photos/200'}
      />
      <DiaryPreviewItem
        date={'2023월 09월 05일'}
        location={'카페 녹다'}
        imgSrc={'https://picsum.photos/200'}
      /> */}
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
