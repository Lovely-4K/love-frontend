import { CategoryButton } from '~/components/common';
import useSelectCategory from '~/pages/Diary/hooks/useSelectCategory';

const categories = ['CAFE', 'FOOD', 'ACCOMODATION', 'CULTURE', 'ETC'] as const;

const CategoryList = () => {
  const { selectCategory, handleCategoryClick } = useSelectCategory();

  return (
    <ul className="flex w-full items-center justify-center gap-5">
      {categories.map((category) => (
        <li key={category}>
          <CategoryButton
            type={category}
            active={category === selectCategory}
            onClick={() => handleCategoryClick(category)}
          />
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
