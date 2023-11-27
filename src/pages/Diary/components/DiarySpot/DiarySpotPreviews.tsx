import { useLocation, useNavigate } from 'react-router-dom';
import { SpotDiarys } from '~/types';
import DiarySpotPreview from './DiarySpotPreview';
import DiaryCreateButton from '~/pages/Diary/components/DiarySpot/DiaryCreateButton';

interface DiarySpotPreviewsProps {
  spotDiarys: SpotDiarys;
}

const DiarySpotPreviews = ({ spotDiarys }: DiarySpotPreviewsProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <DiaryCreateButton />
      {spotDiarys.diaries.map((diary) => (
        <DiarySpotPreview
          key={diary.diaryId}
          picture={diary.imageUrl}
          id={diary.diaryId}
          date={diary.datingDay}
          onClick={() => navigate(`${pathname}/${diary.diaryId}`)}
        />
      ))}
    </div>
  );
};

export default DiarySpotPreviews;
