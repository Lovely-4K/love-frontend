import type categoryType from '~/components/common/CategoryButton/CategoryTypes';
import CategoryList from '~/components/domain/CategoryList/CategoryList';

interface DiaryCategoriesProps {
  defaultCategory: categoryType | undefined;
}

const DiaryCategories = ({ defaultCategory }: DiaryCategoriesProps) => {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-lg font-bold text-base-black">카테고리</span>
      <CategoryList defaultCategory={defaultCategory} />
    </div>
  );
};

export default DiaryCategories;
