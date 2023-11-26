import useDiaryContentContext from '../../hooks/DiaryContent/useDiaryContentContext';
import DiaryImgsCarousel from './DiaryImgsCarousel';
import DiaryImgsUpload from './DiaryImgsUpload';

const DiaryContentImgs = () => {
  const { editable } = useDiaryContentContext();

  return <>{editable ? <DiaryImgsUpload /> : <DiaryImgsCarousel />}</>;
};

export default DiaryContentImgs;
