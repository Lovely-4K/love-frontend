import { useContext } from 'react';
import { DiaryHeader } from '~/pages/Diary/components/DiaryCommon';
import { DiarySpotContext } from '~/pages/Diary/contexts/DiarySpotContent';

const DiarySpotHeader = () => {
  const { pictures, deleteMode, handleDeleteMode } =
    useContext(DiarySpotContext);

  const DeleteButton = () =>
    pictures.length ? (
      <button
        onClick={handleDeleteMode}
        className={`text btn-small w-full rounded-xl ${
          deleteMode
            ? 'bg-base-primary text-base-white'
            : 'border border-grey-200 bg-base-white text-grey-400'
        }`}
      >
        {deleteMode ? '삭제하기' : '선택 삭제'}
      </button>
    ) : (
      <></>
    );

  return (
    <div className="flex items-center justify-between">
      <DiaryHeader />
      <DeleteButton />
    </div>
  );
};

export default DiarySpotHeader;
