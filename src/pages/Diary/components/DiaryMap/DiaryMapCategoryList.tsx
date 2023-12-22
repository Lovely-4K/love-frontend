import { useAtomValue } from 'jotai';
import { CategoryButton } from '~/components/common';
import useMapCategory from '~/pages/Diary/hooks/Diary/useMapCategory';
import { mapCategoryAtom } from '~/stores/diaryAtoms';

const categories = ['CAFE', 'FOOD', 'ACCOMODATION', 'CULTURE'] as const;

const DiaryMapCategoryList = () => {
  const mapCategory = useAtomValue(mapCategoryAtom);
  const { handleMapCategory } = useMapCategory();

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
