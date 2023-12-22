// import useDiaryContext from '../../hooks/Diary/useDiaryContext';
import { useAtomValue } from 'jotai';
import useDiarySpotContext from '../../hooks/useDiarySpotContext';
import { Button } from '~/components/common';
import { DiaryHeader } from '~/pages/Diary/components/DiaryCommon';
import { infoAtom } from '~/stores/diaryAtoms';

const DiarySpotHeader = () => {
  const diarySpotContext = useDiarySpotContext();
  const { spotDiaries, deleteMode, handleDeleteMode } = diarySpotContext;
  const info = useAtomValue(infoAtom);
  const deleteButtonLabel = deleteMode ? '삭제하기' : '선택 삭제';

  const deleteButtonStyle = deleteMode
    ? 'bg-base-primary text-base-white'
    : 'border border-grey-200 bg-base-white text-grey-400';

  const DeleteButton = () =>
    spotDiaries ? (
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
      <DiaryHeader prevLink="/diary" spotName={info ? info.content : ''} />
      <DeleteButton />
    </div>
  );
};

export default DiarySpotHeader;
