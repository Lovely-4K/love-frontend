import categoryType from '~/components/common/CategoryButton/CategoryTypes';
import useDiary from '~/pages/Diary/hooks/Diary/useDiary';

const useSelectCategory = () => {
  const { selectCategory, setSelectCategory } = useDiary();

  const handleCategoryClick = (category: categoryType) => {
    setSelectCategory(category);
  };

  return { selectCategory, setSelectCategory, handleCategoryClick };
};

export default useSelectCategory;
