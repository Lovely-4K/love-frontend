import { DiaryPreviewItem } from '~/components/domain';

const PreviewDiary = () => {
  return (
    // <div className="flex h-full gap-2 overflow-x-auto lg:flex-wrap lg:justify-between lg:overflow-y-auto lg:overflow-x-hidden">
    <div className="flex h-full gap-3 overflow-x-auto overflow-y-hidden lg:grid lg:grid-cols-2 lg:overflow-y-auto lg:overflow-x-hidden">
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

export default PreviewDiary;
