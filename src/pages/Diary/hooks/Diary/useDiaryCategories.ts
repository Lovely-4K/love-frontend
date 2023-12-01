import * as React from 'react';
import categoryType from '~/components/common/CategoryButton/CategoryTypes';

interface useDiaryCategoriesProps {
  setDiaryCategory: React.Dispatch<
    React.SetStateAction<categoryType | undefined>
  >;
}

const useDiaryCategories = ({ setDiaryCategory }: useDiaryCategoriesProps) => {
  const handleCategory = (category: categoryType | undefined) => {
    setDiaryCategory((prevCategory) => {
      if (category === prevCategory) {
        return undefined;
      }

      return category;
    });
  };

  return { handleCategory };
};

export default useDiaryCategories;
