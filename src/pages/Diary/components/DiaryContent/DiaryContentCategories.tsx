import { useAtomValue } from 'jotai';
import useDiaryContents from '../../hooks/DiaryContent/useDiaryContents';
import { DiaryCategories } from '../DiaryCommon';
import {
  editDiaryAtom,
  editableAtom,
  originDiaryAtom,
} from '~/stores/diaryContentAtoms';

const DiaryContentCategories = () => {
  const editable = useAtomValue(editableAtom);
  const editDiary = useAtomValue(editDiaryAtom);
  const originDiary = useAtomValue(originDiaryAtom);
  const diary = editable ? editDiary : originDiary;
  const { category } = diary;
  const { handleChangeCategory } = useDiaryContents();

  return (
    <DiaryCategories
      defaultCategory={category}
      editable={editable}
      handleChangeCategory={handleChangeCategory}
    />
  );
};

export default DiaryContentCategories;
