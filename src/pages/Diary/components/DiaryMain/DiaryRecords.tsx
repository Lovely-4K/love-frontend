import { Suspense } from 'react';
import useDiaryMainContext from '../../hooks/DiaryMain/useDiaryMainContext';
import DiaryMainLoadingFallback from './DiaryMainLoadingFallback';
import DiaryRecordsHeader from './DiaryRecordsHeader';
import DiaryRecordsPreviews from './DiaryRecordsPreviews';
import CategoryList from '~/components/domain/CategoryList/CategoryList';

const DiaryRecords = () => {
  const diaryMainContext = useDiaryMainContext();
  const { handleCategory, diaryCategory } = diaryMainContext;

  return (
    <div className="flex h-full max-h-screen flex-col gap-5 lg:overflow-hidden">
      <DiaryRecordsHeader />
      <CategoryList
        handleChangeCategory={handleCategory}
        editable={true}
        selectedCategory={diaryCategory}
      />
      <Suspense fallback={<DiaryMainLoadingFallback />}>
        <DiaryRecordsPreviews />
      </Suspense>
    </div>
  );
};

export default DiaryRecords;
