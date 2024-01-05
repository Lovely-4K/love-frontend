import { useAtom } from 'jotai';
import { useParams } from 'react-router-dom';
import useInfoToggle from '~/pages/Diary/hooks/Diary/useInfoToggle';
import useDeleteDiaryDetail from '~/services/diary/useDeleteDiaryDetail';
import { deleteModeAtom, selectedIdsAtom } from '~/stores/diarySpotAtoms';

const useDiarySpot = () => {
  const params = useParams();
  const { mutate: deleteMutate } = useDeleteDiaryDetail(params.spotId);
  const [selectedIds, setSelectedIds] = useAtom(selectedIdsAtom);
  const [deleteMode, setDeleteMode] = useAtom(deleteModeAtom);
  const { closeInfo } = useInfoToggle();

  const handleDeleteDiary = () => {
    const { spotId } = params;

    if (spotId) {
      deleteMutate({ diaryList: selectedIds });
      setSelectedIds([]);
      closeInfo();
    }
  };

  const handleDeleteMode = () => {
    if (deleteMode) handleDeleteDiary();
    setDeleteMode(!deleteMode);
  };

  const handleCheckboxChange = (id: number, isChecked: boolean) => {
    setSelectedIds((prevSelectedIds) => {
      const newSelectedIds = new Set(prevSelectedIds);

      if (isChecked) {
        newSelectedIds.add(id);
      } else {
        newSelectedIds.delete(id);
      }

      return Array.from(newSelectedIds);
    });
  };

  return { handleDeleteDiary, handleDeleteMode, handleCheckboxChange };
};

export default useDiarySpot;
