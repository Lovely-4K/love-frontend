import { PropsWithChildren, createContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SpotDiaries } from '~/types';
import useDiaryContext from '../hooks/Diary/useDiaryContext';
import useDeleteDiaryDetail from '~/services/diary/useDeleteDiaryDetail';
import useGetSpotDiarys from '~/services/diary/useGetSpotDiarys';

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
  const { info } = useDiaryContext();
  const params = useParams();
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [deleteMode, setDeleteMode] = useState(false);
  const { mutate: deleteMutate } = useDeleteDiaryDetail(params.spotId);

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

    console.log(selectedIds);
    if (spotId) {
      deleteMutate({ diaryList: selectedIds });
      setSelectedIds([]);
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
