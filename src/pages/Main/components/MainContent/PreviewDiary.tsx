import { Link } from 'react-router-dom';
import { paths } from '~/router';
import { useMainContent } from '../../hooks';
import PreviewNoneItem from './PreviewNoneItem';
import { DiaryPreviewItem } from '~/components/domain';
const PreviewDiary = () => {
  const { recentDiarys } = useMainContent();

  return recentDiarys.content.length > 0 ? (
    <div className="flex h-full gap-3 overflow-x-auto overflow-y-hidden lg:grid lg:grid-cols-2 lg:overflow-y-auto lg:overflow-x-hidden">
      {recentDiarys.content.map((diary) => (
        <Link to={`${paths.DIARY.ROOT}/${diary.kakaoMapId}/${diary.diaryId}`}>
          <DiaryPreviewItem
            key={diary.diaryId}
            date={diary.datingDay}
            location={diary.placeName}
            imgSrc={diary.imageUrl}
          />
        </Link>
      ))}
    </div>
  ) : (
    <PreviewNoneItem
      content="다이어리 작성하러 가기"
      title="작성한 다이어리가 없네요!"
      to={paths.DIARY.ROOT}
    />
  );
};
export default PreviewDiary;
