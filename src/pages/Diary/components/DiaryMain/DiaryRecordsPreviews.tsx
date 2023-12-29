import { useAtom, useAtomValue } from 'jotai';
import { DiaryContent } from '~/types';
import { DiaryPreviewItem } from '~/components/domain';
import useClickPreview from '~/pages/Diary/hooks/Diary/useClickPreview';
import useFilterMarker from '~/pages/Diary/hooks/Diary/useFilterMarker';
import useDiaryMainObserver from '~/pages/Diary/hooks/DiaryMain/useDiaryMainObserver';
import useGetDiarys from '~/services/diary/useGetDiarys';
import {
  diaryCategoryAtom,
  pageAtom,
  selectSortMethodAtom,
} from '~/stores/diaryMainAtoms';

const DiaryRecordsPreviews = () => {
  const [page, setPage] = useAtom(pageAtom);
  const diaryCategory = useAtomValue(diaryCategoryAtom);
  const selectSortMethod = useAtomValue(selectSortMethodAtom);
  const { handleClickPreview } = useClickPreview();
  const { setMarkerFilter } = useFilterMarker();

  const { data: diaryResponse } = useGetDiarys({
    page,
    diaryCategory,
    selectSortMethod,
  });

  const diarys = diaryResponse.content;

  const { recordRef } = useDiaryMainObserver({
    diaryResponse,
    page,
    setPage,
    diarys,
  });

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
