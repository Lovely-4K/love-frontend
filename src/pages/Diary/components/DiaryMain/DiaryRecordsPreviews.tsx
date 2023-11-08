import { DiaryPreviewItem } from '~/components/domain';

const DiaryRecordsPreviews = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <DiaryPreviewItem
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
      />
    </div>
  );
};

export default DiaryRecordsPreviews;
