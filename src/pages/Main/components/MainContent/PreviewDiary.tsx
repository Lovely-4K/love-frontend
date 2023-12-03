import { Link } from 'react-router-dom';
import { paths } from '~/router';
import { useMainContent } from '../../hooks';
import PreviewNoneItem from './PreviewNoneItem';
import { Loading } from '~/components/common';
import { DiaryPreviewItem } from '~/components/domain';
const PreviewDiary = () => {
  const { recentDiarys } = useMainContent();

  if (!recentDiarys)
    return (
      <Loading
        size="medium"
        className="h-full self-center justify-self-center"
      />
    );

  return recentDiarys.content.length > 0 ? (
    <div className="flex h-full gap-3 overflow-x-auto overflow-y-hidden lg:grid lg:grid-cols-2 lg:overflow-y-auto lg:overflow-x-hidden">
      {recentDiarys.content.map((diary, index) => (
        <div
          className="max-h-[8rem] max-w-[8rem] md:max-h-full md:max-w-full"
          key={`${diary.diaryId}-${index}`}
        >
          <Link
            to={`${paths.DIARY.ROOT}/${diary.kakaoMapId}/${diary.diaryId}`}
            state={{
              diary,
            }}
          >
            <DiaryPreviewItem
              date={diary.datingDay}
              location={diary.placeName}
              imgSrc={diary.imageUrl}
            />
          </Link>
        </div>
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
