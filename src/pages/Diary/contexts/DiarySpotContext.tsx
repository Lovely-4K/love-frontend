import { useAtomValue } from 'jotai';
import { PropsWithChildren, createContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SpotDiaries } from '~/types';
import useInfoToggle from '~/pages/Diary/hooks/Diary/useInfoToggle';
import useDeleteDiaryDetail from '~/services/diary/useDeleteDiaryDetail';
import useGetSpotDiarys from '~/services/diary/useGetSpotDiarys';
import { infoAtom } from '~/stores/diaryAtoms';

interface DiarySpotContextProps {
  deleteMode: boolean;
  spotDiaries: SpotDiaries;
  selectedIds: number[];
  handleDeleteMode: () => void;
  handleCheckboxChange: (id: number, isChecked: boolean) => void;
  handleDeleteDiary: () => void;
}

export const DiarySpotContext = createContext<DiarySpotContextProps | null>(
  null,
);

const DiarySpotProvider = ({ children }: PropsWithChildren) => {
  const params = useParams();
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [deleteMode, setDeleteMode] = useState(false);
  const { closeInfo } = useInfoToggle();
  const { mutate: deleteMutate } = useDeleteDiaryDetail(params.spotId);
  const info = useAtomValue(infoAtom);

  if (info === undefined || info.spotId !== params.spotId) {
    throw new Error('앗! 유효하지 않은 접근이에요!');
  }

  const { data: spotDiaries } = useGetSpotDiarys({
    kakaoMapId: Number(info.spotId),
  });

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

  return (
    <DiarySpotContext.Provider
      value={{
        deleteMode,
        spotDiaries,
        handleDeleteMode,
        selectedIds,
        handleCheckboxChange,
        handleDeleteDiary,
      }}
    >
      {children}
    </DiarySpotContext.Provider>
  );
};

export default DiarySpotProvider;
