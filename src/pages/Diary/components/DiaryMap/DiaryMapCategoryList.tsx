import { CategoryButton } from '~/components/common';

const categories = ['CAFE', 'FOOD', 'ACCOMODATION', 'CULTURE'] as const;

const DiaryMapCategoryList = () => {
  //   const { selectCategory, handleCategoryClick } = useSelectCategory();

  return (
    <ul className="flex w-full items-center justify-center gap-5">
      {categories.map((category) => (
        <li key={category}>
          <CategoryButton
            type={category}
            active={false}
            // onClick={() => handleCategoryClick(category)}
          />
        </li>
      ))}
    </ul>
  );
};

export default DiaryMapCategoryList;
