import { useAtomValue } from 'jotai';
import { Rating } from '~/components/domain';
import useDiaryContents from '~/pages/Diary/hooks/DiaryContent/useDiaryContents';
import {
  editDiaryAtom,
  editableAtom,
  originDiaryAtom,
} from '~/stores/diaryContentAtoms';

const DiaryContentRating = () => {
  const editable = useAtomValue(editableAtom);
  const editDiary = useAtomValue(editDiaryAtom);
  const originDiary = useAtomValue(originDiaryAtom);
  const diary = editable ? editDiary : originDiary;
  const { score } = diary;
  const { handleChangeScore } = useDiaryContents();

  return (
    <div className="flex flex-col gap-2">
      <span className="text-lg font-bold text-base-black">평점</span>
      <div>
        <Rating
          readonly={!editable}
          score={score}
          handleChangeScore={handleChangeScore}
        />
      </div>
    </div>
  );
};

export default DiaryContentRating;
