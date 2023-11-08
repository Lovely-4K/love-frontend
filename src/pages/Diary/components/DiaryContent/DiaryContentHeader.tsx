import { useContext } from 'react';
import { DiaryHeader } from '~/pages/Diary/components/DiaryCommon';
import { DiaryContentContext } from '~/pages/Diary/contexts/DiaryContentContext';

const DiaryContentHeader = () => {
  const { editMode, handleEditMode } = useContext(DiaryContentContext);

  const HeaderButton = () =>
    editMode || (
      <div className="font-small flex gap-2 text-grey-400">
        <button onClick={handleEditMode}>수정</button>
        <button>삭제</button>
      </div>
    );

  return (
    <div className="flex items-center justify-between">
      <DiaryHeader />
      <HeaderButton />
    </div>
  );
};

export default DiaryContentHeader;
