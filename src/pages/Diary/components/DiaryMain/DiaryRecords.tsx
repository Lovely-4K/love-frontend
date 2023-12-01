import { Suspense } from 'react';
import useDiaryMainContext from '../../hooks/DiaryMain/useDiaryMainContext';
import DiaryMainLoadingFallback from './DiaryMainLoadingFallback';
import DiaryRecordsHeader from './DiaryRecordsHeader';
import DiaryRecordsPreviews from './DiaryRecordsPreviews';
import CategoryList from '~/components/domain/CategoryList/CategoryList';
import { DiaryMainProvider } from '~/pages/Diary/contexts/DiaryMainContext';

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
        <DiaryMainProvider>
          <DiaryRecordsPreviews />
        </DiaryMainProvider>
      </Suspense>
    </div>
  );
};

export default DiaryRecords;
