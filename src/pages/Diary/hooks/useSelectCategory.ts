import { useContext } from 'react';
import { DiaryContext } from '~/pages/Diary/contexts/DiaryContext';

const useSelectCategory = () => {
  const diaryContext = useContext(DiaryContext);

  if (!diaryContext) throw new Error('Cannot find diaryProvider');

  const { selectCategory, setSelectCategory } = diaryContext;

  const handleCategoryClick = (category: string) => {
    setSelectCategory(category);
  };

  return { selectCategory, setSelectCategory, handleCategoryClick };
};

export default useSelectCategory;
