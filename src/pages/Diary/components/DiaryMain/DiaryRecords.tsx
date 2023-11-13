import DiaryRecordsHeader from './DiaryRecordsHeader';
import DiaryRecordsPreviews from './DiaryRecordsPreviews';

const DiaryRecords = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <DiaryRecordsHeader />
        <DiaryRecordsPreviews />
      </div>
    </>
  );
};

export default DiaryRecords;
