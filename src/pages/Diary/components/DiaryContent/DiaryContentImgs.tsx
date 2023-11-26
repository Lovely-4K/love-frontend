import { useContext } from 'react';
import DiaryImgsCarousel from './DiaryImgsCarousel';
import DiaryImgsUpload from './DiaryImgsUpload';
import { DiaryContentContext } from '~/pages/Diary/contexts/DiaryContentContext';

const DiaryContentImgs = () => {
  const contextValue = useContext(DiaryContentContext);

  if (!contextValue) {
    return null;
  }

  const { editMode } = contextValue;

  return <>{editMode ? <DiaryImgsUpload /> : <DiaryImgsCarousel />}</>;
};

export default DiaryContentImgs;
