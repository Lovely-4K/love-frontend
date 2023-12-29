import { useAtomValue } from 'jotai';
import { memo } from 'react';
import { paths } from '~/router';
// import useDiaryContentContext from '../../hooks/DiaryContent/useDiaryContentContext';
import { DiaryHeader } from '~/pages/Diary/components/DiaryCommon';
// import useDiaryContext from '~/pages/Diary/hooks/Diary/useDiaryContext';
import useDiaryContents from '~/pages/Diary/hooks/DiaryContent/useDiaryContents';
import { infoAtom } from '~/stores/diaryAtoms';
import {
  editDiaryAtom,
  editableAtom,
  originDiaryAtom,
} from '~/stores/diaryContentAtoms';

const DiaryContentHeader = memo(() => {
  const editable = useAtomValue(editableAtom);
  const editDiary = useAtomValue(editDiaryAtom);
  const originDiary = useAtomValue(originDiaryAtom);
  const info = useAtomValue(infoAtom);
  const diary = editable ? editDiary : originDiary;
  const { kakaoMapId, placeName } = diary;
  const { handleEditMode, handleDeleteDiary } = useDiaryContents();
  const { DIARY } = paths;
  const prevLink = info ? `${DIARY.ROOT}/${kakaoMapId}` : `${DIARY.ROOT}`;

  const HeaderButton = () =>
    editable || (
      <div className="flex gap-2 text-sm text-grey-400">
        <button onClick={handleEditMode}>수정</button>
        <button onClick={handleDeleteDiary}>삭제</button>
      </div>
    );

  return (
    <div className="flex items-center justify-between">
      <DiaryHeader prevLink={prevLink} spotName={info?.content || placeName} />
      {!editable && <HeaderButton />}
    </div>
  );
});

export default DiaryContentHeader;
