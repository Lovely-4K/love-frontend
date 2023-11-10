import { useContext } from 'react';
import DiaryImgsCarousel from '~/pages/Diary/components/DiaryContent/DiaryImgsCarousel';
import DiaryImgsUpload from '~/pages/Diary/components/DiaryContent/DiaryImgsUpload';
import { DiaryContentContext } from '~/pages/Diary/contexts/DiaryContentContext';

const DiaryContentImgs = () => {
  const { editMode } = useContext(DiaryContentContext);

  return <>{editMode ? <DiaryImgsUpload /> : <DiaryImgsCarousel />}</>;
};

export default DiaryContentImgs;
