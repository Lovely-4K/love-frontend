import categoryType from '~/components/common/CategoryButton/CategoryTypes';
import { DiaryContextProps } from '~/pages/Diary/contexts/DiaryContext';

interface useDiaryCategoriesProps {
  setDiaryCategory: DiaryContextProps['setDiaryCategory'];
}

const useDiaryCategories = ({ setDiaryCategory }: useDiaryCategoriesProps) => {
  const handleCategory = (category: categoryType) => {
    setDiaryCategory((currCategory) => {
      currCategory = currCategory === category ? undefined : category;

      return currCategory;
    });
  };

  return { setDiaryCategory, handleCategory };
};

export default useDiaryCategories;
