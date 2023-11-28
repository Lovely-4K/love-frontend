import { PropsWithChildren, createContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SpotDiaries } from '~/types';
import useDiaryContext from '../hooks/Diary/useDiaryContext';
import useGetSpotDiarys from '~/services/diary/useGetSpotDiarys';

interface DiarySpotContextProps {
  deleteMode: boolean;
  spotDiaries: SpotDiaries;
  handleDeleteMode: () => void;
}

export const DiarySpotContext = createContext<DiarySpotContextProps | null>(
  null,
);

const DiarySpotProvider = ({ children }: PropsWithChildren) => {
  const { info } = useDiaryContext();
  const params = useParams();

  if (info === undefined || info.spotId !== params.spotId) {
    throw new Error('앗! 유효하지 않은 접근이에요!');
  }

  const [deleteMode, setDeleteMode] = useState(false);
  const { data: spotDiaries } = useGetSpotDiarys({
    kakaoMapId: Number(info.spotId),
  });

  const handleDeleteMode = () => {
    setDeleteMode(!deleteMode);
  };

  return (
    <DiarySpotContext.Provider
      value={{ deleteMode, spotDiaries, handleDeleteMode }}
    >
      {children}
    </DiarySpotContext.Provider>
  );
};

export default DiarySpotProvider;
