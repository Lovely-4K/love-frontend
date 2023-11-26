import { useContext } from 'react';
import categoryType from '~/components/common/CategoryButton/CategoryTypes';
import { DiaryContext } from '~/pages/Diary/contexts/DiaryContext';

const useSelectCategory = () => {
  const diaryContext = useContext(DiaryContext);

  if (!diaryContext) throw new Error('Cannot find diaryProvider');

  const { selectCategory, setSelectCategory } = diaryContext;

  const handleCategoryClick = (category: categoryType) => {
    setSelectCategory(category);
  };

  return { selectCategory, setSelectCategory, handleCategoryClick };
};

export default useSelectCategory;
