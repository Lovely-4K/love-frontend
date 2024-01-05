import useDiaryForm from '../../hooks/DiaryContent/useDiaryForm';
import DiaryImgsCarousel from './DiaryImgsCarousel';
import DiaryImgsUpload from './DiaryImgsUpload';

const DiaryContentImgsSection = () => {
  const { editable } = useDiaryForm();

  return editable ? <DiaryImgsUpload /> : <DiaryImgsCarousel />;
};

export default DiaryContentImgsSection;
