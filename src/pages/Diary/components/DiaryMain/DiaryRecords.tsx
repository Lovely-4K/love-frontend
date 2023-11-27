import DiaryRecordsHeader from './DiaryRecordsHeader';
import DiaryRecordsPreviews from './DiaryRecordsPreviews';
import CategoryList from '~/components/domain/CategoryList/CategoryList';
import useDiary from '~/pages/Diary/hooks/Diary/useDiary';

const DiaryRecords = () => {
  const {
    diaryCategory,
    methods: { handleDiaryCategories },
  } = useDiary();
  const { handleCategory } = handleDiaryCategories;

  return (
    <div className="flex flex-col gap-5">
      <DiaryRecordsHeader />
      <CategoryList
        handleChangeCategory={handleCategory}
        editable={true}
        selectedCategory={diaryCategory}
      />
      <DiaryRecordsPreviews />
    </div>
  );
};

export default DiaryRecords;
