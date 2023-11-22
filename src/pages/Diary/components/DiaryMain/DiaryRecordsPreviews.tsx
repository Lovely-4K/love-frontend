import { DiaryPreviewItem } from '~/components/domain';
import useGetDiarys from '~/pages/Diary/hooks/useGetDiarys';
import useSelectCategory from '~/pages/Diary/hooks/useSelectCategory';
import useSelectSortMethod from '~/pages/Diary/hooks/useSelectSortMethod';

const DiaryRecordsPreviews = () => {
  const { selectCategory } = useSelectCategory();
  const { selectSortMethod } = useSelectSortMethod();
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
      {diarys.content.map(({ imageUrl }, index) => (
        <DiaryPreviewItem
          key={index}
          date={'2023월 09월 05일'}
          location={'카페 녹다'}
          imgSrc={imageUrl}
        />
      ))}
    </div>
  );
};

export default DiaryRecordsPreviews;
