import useDiaryMainContext from '../../hooks/DiaryMain/useDiaryMainContext';
import DiaryRecordsHeader from './DiaryRecordsHeader';
import DiaryRecordsPreviews from './DiaryRecordsPreviews';
import CategoryList from '~/components/domain/CategoryList/CategoryList';

const DiaryRecords = () => {
  const diaryMainContext = useDiaryMainContext();
  const { handleCategory, diaryCategory } = diaryMainContext;

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
