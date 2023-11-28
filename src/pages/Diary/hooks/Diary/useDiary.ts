import { useContext } from 'react';
import { DiaryContext } from '~/pages/Diary/contexts/DiaryContext';

const useDiary = () => {
  const diaryContext = useContext(DiaryContext);

  if (!diaryContext) throw new Error('Cannot find DiaryProvider');

  return diaryContext;
};

export default useDiary;
