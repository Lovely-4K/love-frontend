import { useContext } from 'react';
import { DiaryContentContext } from '~/pages/Diary/contexts/DiaryContentContext';

const DiaryContentEditButton = () => {
  const contextValue = useContext(DiaryContentContext);

  if (!contextValue) {
    return null;
  }

  const { editMode, handleEditComplete, handleEditCancel } = contextValue;

  return (
    editMode && (
      <div className="flex justify-end gap-2">
        <button
          onClick={handleEditCancel}
          className="btn-small w-full rounded-xl border border-grey-200 text-grey-400"
        >
          취소
        </button>
        <button
          onClick={handleEditComplete}
          className="btn-small w-full rounded-xl border bg-base-primary text-base-white"
        >
          완료
        </button>
      </div>
    )
  );
};

export default DiaryContentEditButton;
