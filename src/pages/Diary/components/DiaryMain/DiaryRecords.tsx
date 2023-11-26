import DiaryRecordsHeader from './DiaryRecordsHeader';
import DiaryRecordsPreviews from './DiaryRecordsPreviews';
import CategoryList from '~/components/domain/CategoryList/CategoryList';
import useSelectCategory from '~/pages/Diary/hooks/useSelectCategory';

const DiaryRecords = () => {
  const { handleCategoryClick, selectCategory } = useSelectCategory();

  return (
    <div className="flex flex-col gap-5">
      <DiaryRecordsHeader />
      <CategoryList
        handleChangeCategory={handleCategoryClick}
        selectedCategory={selectCategory}
      />
      <DiaryRecordsPreviews />
    </div>
  );
};

export default DiaryRecords;
