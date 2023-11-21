import { useState } from 'react';
import { CategoryButton } from '~/components/common';
import useGetDiarys from '~/pages/Diary/hooks/useGetDiarys';

const categories = ['CAFE', 'FOOD', 'ACCOMODATION', 'CULTURE', 'ETC'] as const;

const CategoryList = () => {
  const [selectCategory, setSelectCategory] = useState('');
  const { data: diarys, isSuccess } = useGetDiarys({ selectCategory });

  const handleCategoryClick = (category: string) => {
    setSelectCategory(category);
  };

  if (!isSuccess) return null;

  console.log(diarys);

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
