import { useContext } from 'react';
import { DiaryMapContext } from '~/pages/Diary/contexts/DiaryMapContext';

const useInfo = () => {
  const diaryMapContext = useContext(DiaryMapContext);

  if (!diaryMapContext) throw new Error('Cannot find diaryMapProvider');

  const { info, setInfo } = diaryMapContext;

  return {
    info,
    setInfo,
  };
};

export default useInfo;
