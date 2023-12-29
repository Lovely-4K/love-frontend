import { useAtomValue } from 'jotai';
import { memo } from 'react';
import useDiaryContents from '~/pages/Diary/hooks/DiaryContent/useDiaryContents';
import {
  editDiaryAtom,
  editableAtom,
  originDiaryAtom,
} from '~/stores/diaryContentAtoms';

const DiaryContentDate = memo(() => {
  const editable = useAtomValue(editableAtom);
  const editDiary = useAtomValue(editDiaryAtom);
  const originDiary = useAtomValue(originDiaryAtom);
  const diary = editable ? editDiary : originDiary;
  const { datingDay } = diary;
  const { handleChangeDatingDay } = useDiaryContents();

  return (
    <div className="flex flex-col gap-2">
      <span className="text-lg font-bold text-base-black">날짜</span>
      <div>
        <input
          onChange={handleChangeDatingDay}
          className="font-medium text-base-black focus:outline-none"
          type="date"
          value={datingDay}
          readOnly={!editable}
        />
      </div>
    </div>
  );
});

export default DiaryContentDate;
