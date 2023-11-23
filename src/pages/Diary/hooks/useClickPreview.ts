import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from '~/router';
import { DiaryContent } from '~/types';
import { DiaryMapContext } from '~/pages/Diary/contexts/DiaryMapContext';

const useClickPreview = () => {
  const navigate = useNavigate();
  const diaryMapContext = useContext(DiaryMapContext);

  if (!diaryMapContext) throw new Error('Cannot find diaryMapProvider');

  const handleClickPreview = (preview: DiaryContent) => {
    navigate(`${paths.DIARY.ROOT}/${preview.kakaoMapId}/${preview.diaryId}`);
  };

  return { handleClickPreview };
};

export default useClickPreview;
