import { useLocation, useNavigate } from 'react-router-dom';
import { SpotDiaries } from '~/types';
import DiarySpotPreview from './DiarySpotPreview';
import DiaryCreateButton from '~/pages/Diary/components/DiarySpot/DiaryCreateButton';
import useDiarySpotContext from '~/pages/Diary/hooks/useDiarySpotContext';

interface DiarySpotPreviewsProps {
  spotDiaries: SpotDiaries;
}

const DiarySpotPreviews = ({ spotDiaries }: DiarySpotPreviewsProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const diarySpotContext = useDiarySpotContext();
  const { deleteMode, selectedIds } = diarySpotContext;

  return (
    <div className="flex h-full flex-col items-center justify-center overflow-y-hidden">
      <DiaryCreateButton />
      <div className="flex h-full flex-col items-center gap-4 overflow-y-auto">
        {spotDiaries.diaries.map((diary) => (
          <DiarySpotPreview
            key={diary.diaryId}
            picture={diary.imageUrl}
            id={diary.diaryId}
            date={diary.datingDay}
            onClick={
              deleteMode
                ? () => {}
                : () => navigate(`${pathname}/${diary.diaryId}`)
            }
            isChecked={selectedIds.includes(diary.diaryId)}
          />
        ))}
      </div>
    </div>
  );
};

export default DiarySpotPreviews;
