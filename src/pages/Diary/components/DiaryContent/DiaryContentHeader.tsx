import { useContext } from 'react';
import { DiaryHeader } from '~/pages/Diary/components/DiaryCommon';
import { DiaryContentContext } from '~/pages/Diary/contexts/DiaryContentContext';

const DiaryContentHeader = () => {
  const contextValue = useContext(DiaryContentContext);

  if (!contextValue) {
    return null;
  }

  const { editMode, handleEditMode } = contextValue;

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
