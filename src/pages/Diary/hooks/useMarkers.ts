import { useContext } from 'react';
import { DiaryContext } from '~/pages/Diary/contexts/DiaryContext';

const useMarkers = () => {
  const diaryContext = useContext(DiaryContext);

  if (!diaryContext) throw new Error('Cannot find diaryProvider');

  const { markers, setMarkers } = diaryContext;

  return {
    markers,
    setMarkers,
  };
};

export default useMarkers;
