import { useContext } from 'react';
import { DiaryContext } from '~/pages/Diary/contexts/DiaryContext';

const useInfo = () => {
  const diaryContext = useContext(DiaryContext);

  if (!diaryContext) throw new Error('Cannot find diaryMapProvider');

  const { info, setInfo } = diaryContext;

  return {
    info,
    setInfo,
  };
};

export default useInfo;
