import { useContext } from 'react';
import { DiaryContext } from '~/pages/Diary/contexts/DiaryContext';

const useSelectSortMethod = () => {
  const diaryContext = useContext(DiaryContext);

  if (!diaryContext) throw new Error('Cannot find diaryProvider');

  const { selectSortMethod, setSelectSortMethod } = diaryContext;

  const handleSortMethodClick = (sortMethod: string) => {
    setSelectSortMethod(sortMethod);
  };

  return { selectSortMethod, setSelectSortMethod, handleSortMethodClick };
};

export default useSelectSortMethod;
