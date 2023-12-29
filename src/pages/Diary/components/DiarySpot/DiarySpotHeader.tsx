// import useDiaryContext from '../../hooks/Diary/useDiaryContext';
import { useAtomValue } from 'jotai';
import { useParams } from 'react-router-dom';
import { Button } from '~/components/common';
import { DiaryHeader } from '~/pages/Diary/components/DiaryCommon';
import useDiarySpot from '~/pages/Diary/hooks/DiarySpot/useDiarySpot';
import useGetSpotDiarys from '~/services/diary/useGetSpotDiarys';
import { infoAtom } from '~/stores/diaryAtoms';
import { deleteModeAtom } from '~/stores/diarySpotAtoms';

const DiarySpotHeader = () => {
  const params = useParams();
  const deleteMode = useAtomValue(deleteModeAtom);
  const info = useAtomValue(infoAtom);
  const { handleDeleteMode } = useDiarySpot();
  const deleteButtonLabel = deleteMode ? '삭제하기' : '선택 삭제';

  if (info === undefined || info.spotId !== params.spotId) {
    throw new Error('앗! 유효하지 않은 접근이에요!');
  }

  const { data: spotDiaries } = useGetSpotDiarys({
    kakaoMapId: Number(info.spotId),
  });

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
