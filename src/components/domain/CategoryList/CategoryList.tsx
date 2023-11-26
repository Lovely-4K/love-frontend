import type categoryType from '~/components/common/CategoryButton/CategoryTypes';
import { CategoryButton } from '~/components/common';

const categories = ['CAFE', 'FOOD', 'ACCOMODATION', 'CULTURE', 'ETC'] as const;

interface CategoryListProps {
  selectedCategory?: categoryType | undefined;
  editable: boolean;
  handleChangeCategory: (category: categoryType) => void;
}

const CategoryList = ({
  selectedCategory,
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
            active={category === selectedCategory}
            handleClickButton={handleChangeCategory}
          />
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
