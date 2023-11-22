import useDiaryContent from '../../hooks/DiaryContent/useDiaryContent';
import DiaryImgsCarousel from './DiaryImgsCarousel';
import DiaryImgsUpload from './DiaryImgsUpload';

const DiaryContentImgs = () => {
  const { editable } = useDiaryContent();

  return <>{editable ? <DiaryImgsUpload /> : <DiaryImgsCarousel />}</>;
};

export default DiaryContentImgs;
