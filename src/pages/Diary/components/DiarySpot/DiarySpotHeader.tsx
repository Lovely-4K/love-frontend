import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '~/components/common';
import { DiaryHeader } from '~/pages/Diary/components/DiaryCommon';
import { DiarySpotContext } from '~/pages/Diary/contexts/DiarySpotContent';
import useDiary from '~/pages/Diary/hooks/Diary/useDiary';

const DiarySpotHeader = () => {
  const locate = useLocation();
  const { info } = useDiary();
  if (!info) return;

  if (!locate.state) return;

  const contextValue = useContext(DiarySpotContext);

  if (!contextValue) {
    return null;
  }

  const { pictures, deleteMode, handleDeleteMode } = contextValue;

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
      <DiaryHeader prevLink="/diary" spotName={info.content} />
      <DeleteButton />
    </div>
  );
};

export default DiarySpotHeader;
