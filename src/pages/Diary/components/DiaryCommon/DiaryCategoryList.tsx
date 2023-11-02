import CategoryList from '~/components/domain/CategoryList/CategoryList';

const DiaryCategoryList = () => {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-large font-bold text-base-black">카테고리</span>
      <CategoryList></CategoryList>
    </div>
  );
};

export default DiaryCategoryList;
