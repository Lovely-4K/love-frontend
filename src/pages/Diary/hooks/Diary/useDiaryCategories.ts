import { useSetAtom } from 'jotai';
import * as React from 'react';
import categoryType from '~/components/common/CategoryButton/CategoryTypes';
import { diaryCategoryAtom } from '~/stores/diaryMainAtoms';

const useDiaryCategories = () => {
  const setDiaryCategory = useSetAtom(diaryCategoryAtom);

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
