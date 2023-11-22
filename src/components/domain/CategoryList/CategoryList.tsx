import type categoryType from '~/components/common/CategoryButton/CategoryTypes';
import { useState } from 'react';
import { CategoryButton } from '~/components/common';

const categories = ['CAFE', 'FOOD', 'SLEEP', 'CULTURE', 'ETC'] as const;

interface CategoryListProps {
  defaultCategory: categoryType | undefined;
}

const CategoryList = ({ defaultCategory }: CategoryListProps) => {
  const [selectedCategory, setSelectedCategory] = useState<
    categoryType | undefined
  >(defaultCategory);

  const handleClickButton = (categoryType: categoryType) => {
    setSelectedCategory(categoryType);
  };

  return (
    <ul className="flex w-full items-center justify-center gap-5">
      {categories.map((category) => (
        <li key={category}>
          <CategoryButton
            type={category}
            active={category === selectedCategory}
            handleClickButton={handleClickButton}
          />
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
