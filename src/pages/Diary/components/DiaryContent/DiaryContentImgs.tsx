// import useDiaryContentContext from '../../hooks/DiaryContent/useDiaryContentContext';
import { useAtomValue } from 'jotai';
import DiaryImgsCarousel from './DiaryImgsCarousel';
import DiaryImgsUpload from './DiaryImgsUpload';
import { editableAtom } from '~/stores/diaryContentAtoms';

const DiaryContentImgs = () => {
  const editable = useAtomValue(editableAtom);

  return <>{editable ? <DiaryImgsUpload /> : <DiaryImgsCarousel />}</>;
};

export default DiaryContentImgs;
