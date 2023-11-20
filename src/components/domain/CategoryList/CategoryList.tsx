import { useState } from 'react';
import { CategoryButton } from '~/components/common';
import useGetDiarys from '~/pages/Diary/hooks/useGetDiarys';

const categories = ['cafe', 'food', 'sleep', 'culture', 'etc'] as const;

const CategoryList = () => {
  const [category, setCategory] = useState('cafe');
  const { data: diarys, isSuccess } = useGetDiarys({ category });

  const handleCategoryClick = (category: string) => {
    setCategory(category);
  };

  if (!isSuccess) return null;

  console.log(diarys);

  return (
    <ul className="flex w-full items-center justify-center gap-5">
      {categories.map((category) => (
        <li key={category}>
          <CategoryButton
            type={category}
            active={false}
            onClick={() => handleCategoryClick(category)}
          />
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
