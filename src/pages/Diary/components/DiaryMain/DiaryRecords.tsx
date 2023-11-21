import DiaryRecordsHeader from './DiaryRecordsHeader';
import DiaryRecordsPreviews from './DiaryRecordsPreviews';
import CategoryList from '~/components/domain/CategoryList/CategoryList';

const DiaryRecords = () => {
  return (
    <div className="flex flex-col gap-5">
      <DiaryRecordsHeader />
      <CategoryList />
      <DiaryRecordsPreviews />
    </div>
  );
};

export default DiaryRecords;
