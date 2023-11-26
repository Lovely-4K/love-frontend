import type categoryType from '~/components/common/CategoryButton/CategoryTypes';

import { CategoryButton } from '~/components/common';
import useGetDiarys from '~/pages/Diary/hooks/useGetDiarys';

const categories = ['CAFE', 'FOOD', 'SLEEP', 'CULTURE', 'ETC'] as const;

interface CategoryListProps {
  seletedCategory?: categoryType;
  editable: boolean;
  handleChangeCategory: (category: categoryType) => void;
}

const CategoryList = ({
  seletedCategory,
  editable = false,
  handleChangeCategory,
}: CategoryListProps) => {
  return (
    <ul className="flex w-full items-center justify-center gap-5">
      {categories.map((category) => (
        <li key={category}>
          <CategoryButton
            editable={editable}
            type={category}
            active={category === seletedCategory}
            handleClickButton={handleChangeCategory}
          />
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
