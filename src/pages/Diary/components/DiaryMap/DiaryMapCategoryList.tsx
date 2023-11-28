import { CategoryButton } from '~/components/common';
import useDiary from '~/pages/Diary/hooks/Diary/useDiary';

const categories = ['CAFE', 'FOOD', 'ACCOMODATION', 'CULTURE'] as const;

const DiaryMapCategoryList = () => {
  const {
    mapCategory,
    methods: { handleMapCategories },
  } = useDiary();
  const { handleMapCategory } = handleMapCategories;

  return (
    <ul className="flex w-full items-center justify-center gap-5">
      {categories.map((category) => (
        <li key={category}>
          <CategoryButton
            type={category}
            active={mapCategory === category}
            editable={true}
            handleClickButton={handleMapCategory}
          />
        </li>
      ))}
    </ul>
  );
};

export default DiaryMapCategoryList;
