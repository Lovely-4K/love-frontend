import DiaryRecordsHeader from './DiaryRecordsHeader';
import DiaryRecordsPreviews from './DiaryRecordsPreviews';
import CategoryList from '~/components/domain/CategoryList/CategoryList';
import useDiaryContext from '~/pages/Diary/hooks/Diary/useDiaryContext';

const DiaryRecords = () => {
  const {
    diaryCategory,
    methods: { handleDiaryCategories },
  } = useDiaryContext();
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
