import { useContext } from 'react';
import { DiaryMapContext } from '~/pages/Diary/contexts/DiaryMapContext';

const useMapCategory = () => {
  const diaryMapContext = useContext(DiaryMapContext);

  if (!diaryMapContext) throw new Error('Cannot find diaryMapProvider');

  const { mapCategory, setMapCategory } = diaryMapContext;

  const handleMapCategory = (
    category: 'CAFE' | 'FOOD' | 'ACCOMODATION' | 'CULTURE',
  ) => {
    setMapCategory(category);
  };

  return { mapCategory, setMapCategory, handleMapCategory };
};

export default useMapCategory;
