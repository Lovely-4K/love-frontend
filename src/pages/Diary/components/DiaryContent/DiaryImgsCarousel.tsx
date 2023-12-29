// import useDiaryContentContext from '../../hooks/DiaryContent/useDiaryContentContext';
import { useAtomValue } from 'jotai';
import { Carousel } from '~/components/domain';
import {
  editDiaryAtom,
  editableAtom,
  originDiaryAtom,
} from '~/stores/diaryContentAtoms';
import { changeImageType } from '~/utils/Diary';

const DiaryImgsCarousel = () => {
  const editable = useAtomValue(editableAtom);
  const editDiary = useAtomValue(editDiaryAtom);
  const originDiary = useAtomValue(originDiaryAtom);
  const diary = editable ? editDiary : originDiary;
  const { pictures } = diary;
  const imgUrl = changeImageType(pictures);

  return (
    <div className="h-[auto] max-h-[10rem]">
      <Carousel pictures={imgUrl} />
    </div>
  );
};

export default DiaryImgsCarousel;
