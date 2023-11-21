import useDiaryContent from '../../hooks/DiaryContent/useDiaryContent';
import DiaryImgsCarousel from './DiaryImgsCarousel';
import DiaryImgsUpload from './DiaryImgsUpload';

const DiaryContentImgs = () => {
  const { editMode } = useDiaryContent();

  return <>{editMode ? <DiaryImgsUpload /> : <DiaryImgsCarousel />}</>;
};

export default DiaryContentImgs;
