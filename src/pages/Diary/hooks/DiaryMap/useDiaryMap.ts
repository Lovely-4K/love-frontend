import { useContext } from 'react';
import { DiaryMapContext } from '~/pages/Diary/contexts/DiaryMapContext';

const useDiaryMap = () => {
  const diaryMapContext = useContext(DiaryMapContext);

  if (!diaryMapContext) throw new Error('Cannot find DiaryMapProvider');

  return diaryMapContext;
};

export default useDiaryMap;
