import { useMainContent } from '../../hooks';
import { DiaryPreviewItem } from '~/components/domain';

const PreviewDiary = () => {
  const { recentDiarys } = useMainContent();

  return (
    <div className="flex h-full gap-3 overflow-x-auto overflow-y-hidden lg:grid lg:grid-cols-2 lg:overflow-y-auto lg:overflow-x-hidden">
      {recentDiarys.content.map((diary) => (
        <DiaryPreviewItem
          date={diary.datingDay}
          location={diary.placeName}
          imgSrc={diary.imageUrl}
        />
      ))}
    </div>
  );
};

export default PreviewDiary;
