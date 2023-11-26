import { CategoryButton } from '~/components/common';
import useMapCategory from '~/pages/Diary/hooks/useMapCategory';

const categories = ['CAFE', 'FOOD', 'ACCOMODATION', 'CULTURE'] as const;

const DiaryMapCategoryList = () => {
  const { mapCategory, handleMapCategory } = useMapCategory();

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
