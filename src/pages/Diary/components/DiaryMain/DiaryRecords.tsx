import { useAtomValue } from 'jotai';
import { Suspense } from 'react';
import DiaryMainLoadingFallback from './DiaryMainLoadingFallback';
import DiaryRecordsHeader from './DiaryRecordsHeader';
import DiaryRecordsPreviews from './DiaryRecordsPreviews';
import CategoryList from '~/components/domain/CategoryList/CategoryList';
import useDiaryCategories from '~/pages/Diary/hooks/Diary/useDiaryCategories';
import { diaryCategoryAtom } from '~/stores/diaryMainAtoms';

const DiaryRecords = () => {
  const { handleCategory } = useDiaryCategories();
  const diaryCategory = useAtomValue(diaryCategoryAtom);

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
