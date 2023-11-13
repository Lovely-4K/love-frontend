import { useContext } from 'react';
import DiaryImgsCarousel from './DiaryImgsCarousel';
import DiaryImgsUpload from './DiaryImgsUpload';
import { DiaryContentContext } from '~/pages/Diary/contexts/DiaryContentContext';

const DiaryContentImgs = () => {
  const { editMode } = useContext(DiaryContentContext);

  return <>{editMode ? <DiaryImgsUpload /> : <DiaryImgsCarousel />}</>;
};

export default DiaryContentImgs;
