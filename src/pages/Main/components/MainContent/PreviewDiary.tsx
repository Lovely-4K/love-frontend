import { Link } from 'react-router-dom';
import { paths } from '~/router';
import { useMainContent } from '../../hooks';
import { DiaryPreviewItem } from '~/components/domain';

const PreviewDiary = () => {
  const { recentDiarys } = useMainContent();

  return recentDiarys.content.length > 0 ? (
    <div className="flex h-full gap-3 overflow-x-auto overflow-y-hidden lg:grid lg:grid-cols-2 lg:overflow-y-auto lg:overflow-x-hidden">
      {recentDiarys.content.map((diary) => (
        <DiaryPreviewItem
          key={diary.diaryId}
          date={diary.datingDay}
          location={diary.placeName}
          imgSrc={diary.imageUrl}
        />
      ))}
    </div>
  ) : (
    <div className="flex h-32 flex-col items-center justify-center lg:h-56">
      <div className="text-base">작성한 다이어리가 없네요!</div>
      <Link to={paths.DIARY} className="text-base text-grey-400">
        다이어리 작성하러 가기 →
      </Link>
    </div>
  );
};

export default PreviewDiary;
