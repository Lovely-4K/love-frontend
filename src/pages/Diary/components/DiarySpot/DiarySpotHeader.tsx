import { useContext } from 'react';
import { Button } from '~/components/common';
import { DiaryHeader } from '~/pages/Diary/components/DiaryCommon';
import { DiarySpotContext } from '~/pages/Diary/contexts/DiarySpotContent';

const DiarySpotHeader = () => {
  const { pictures, deleteMode, handleDeleteMode } =
    useContext(DiarySpotContext);

  const deleteButtonStyle = deleteMode
    ? 'bg-base-primary text-base-white'
    : 'border border-grey-200 bg-base-white text-grey-400';
  const deleteButtonLabel = deleteMode ? '삭제하기' : '선택 삭제';

  const DeleteButton = () =>
    pictures.length ? (
      <Button
        size="small"
        onClick={handleDeleteMode}
        className={`rounded-xl text-sm ${deleteButtonStyle}`}
      >
        {deleteButtonLabel}
      </Button>
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
