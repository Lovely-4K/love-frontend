import { useAtomValue } from 'jotai';
import DiaryContentImgs from './DiaryContentImgs';
import {
  editDiaryAtom,
  editableAtom,
  originDiaryAtom,
} from '~/stores/diaryContentAtoms';

const DiaryContentDetail = () => {
  const editable = useAtomValue(editableAtom);
  const editDiary = useAtomValue(editDiaryAtom);
  const originDiary = useAtomValue(originDiaryAtom);
  const diary = editable ? editDiary : originDiary;

  return (
    <div className="flex flex-col gap-2">
      <span className="text-lg font-bold text-base-black">다이어리 내용</span>
      <div className="flex flex-col gap-4 py-2">
        {!editable && diary.pictures.firstImage === null ? (
          <span className="text-center text-sm text-grey-300">
            함께 찍은 사진들을 공유하세요!
          </span>
        ) : (
          <DiaryContentImgs />
        )}
      </div>
    </div>
  );
};

export default DiaryContentDetail;
