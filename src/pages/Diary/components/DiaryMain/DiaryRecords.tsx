import { Suspense } from 'react';
import DiaryMainLoadingFallback from './DiaryMainLoadingFallback';
import DiaryRecordsHeader from './DiaryRecordsHeader';
import DiaryRecordsPreviews from './DiaryRecordsPreviews';
import CategoryList from '~/components/domain/CategoryList/CategoryList';
import { DiaryMainProvider } from '~/pages/Diary/contexts/DiaryMainContext';
import useDiaryContext from '~/pages/Diary/hooks/Diary/useDiaryContext';

const DiaryRecords = () => {
  const {
    diaryCategory,
    methods: { handleDiaryCategories },
  } = useDiaryContext();
  const { handleCategory } = handleDiaryCategories;

  return (
    <div className="flex h-full flex-col gap-5">
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
