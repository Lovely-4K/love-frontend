import { useContext } from 'react';
import { DiaryContentContext } from '~/pages/Diary/contexts/DiaryContent/DiaryContentContext';

const useDiaryContentContext = () => {
  const diaryContentContext = useContext(DiaryContentContext);

  if (diaryContentContext === null) {
    throw new Error('not declared useDiaryContentContext');
  }

  return diaryContentContext;
};

export default useDiaryContentContext;
