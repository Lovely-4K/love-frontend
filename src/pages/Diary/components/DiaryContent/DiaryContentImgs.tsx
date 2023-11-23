import useDiaryContent from '../../hooks/DiaryContent/useDiaryContent';
import DiaryImgsCarousel from './DiaryImgsCarousel';
import DiaryImgsUpload from './DiaryImgsUpload';

const DiaryContentImgs = () => {
  const { data } = useDiaryContent();
  const { editable } = data;

  return <>{editable ? <DiaryImgsUpload /> : <DiaryImgsCarousel />}</>;
};

export default DiaryContentImgs;
