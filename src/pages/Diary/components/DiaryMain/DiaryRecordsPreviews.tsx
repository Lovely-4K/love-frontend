import { DiaryContent } from '~/types';
import useDiaryContext from '../../hooks/Diary/useDiaryContext';
import useDiaryMainContext from '../../hooks/DiaryMain/useDiaryMainContext';
import { DiaryPreviewItem } from '~/components/domain';
import useFilterMarker from '~/pages/Diary/hooks/Diary/useFilterMarker';

const DiaryRecordsPreviews = () => {
  const {
    methods: { handleClickPreviews },
  } = useDiaryContext();
  const { diarys, recordRef } = useDiaryMainContext();
  const { handleClickPreview } = handleClickPreviews;
  const { setMarkerFilter } = useFilterMarker();

  const previewClick = (diary: DiaryContent) => {
    setMarkerFilter('ALL');
    handleClickPreview(diary);
  };

  const diaryWrapStyle = diarys.length && 'h-full';

  return (
    <div className="h-full lg:overflow-hidden">
      <div
        className={`grid auto-rows-min grid-cols-2 md:grid-cols-3 lg:grid-cols-2 lg:overflow-y-auto ${diaryWrapStyle}`}
      >
        {diarys.map((diary, index) => (
          <div
            key={`${diary.diaryId}-${index}`}
            className="m-2"
            ref={diarys.length - 1 === index ? recordRef : null}
          >
            <DiaryPreviewItem
              date={diary.datingDay}
              location={diary.placeName}
              imgSrc={diary.imageUrl}
              onClick={() => previewClick(diary)}
            />
          </div>
        ))}
      </div>
      <div className="flex w-full items-center justify-center py-3 text-sm text-grey-400">
        {diarys.length === 0 && '아직 아무 다이어리도 작성하지 않았어요!'}
      </div>
    </div>
  );
};

export default DiaryRecordsPreviews;
