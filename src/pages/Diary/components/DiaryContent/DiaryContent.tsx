import DiaryContentDate from './DiaryContentDate';
import DiaryContentDetail from './DiaryContentDetail';
import DiaryContentEditButton from './DiaryContentEditButton';
import DiaryContentHeader from './DiaryContentHeader';
import DiaryContentRating from './DiaryContentRating';
import { DiaryCategories } from '~/pages/Diary/components/DiaryCommon';
import { DiaryContentProvider } from '~/pages/Diary/contexts/DiaryContentContext';

const DiaryContent = () => {
  return (
    <DiaryContentProvider>
      <div className="flex w-full flex-col gap-6 overflow-y-auto overflow-x-hidden">
        <DiaryContentHeader />
        <div className="flex items-center justify-between">
          <DiaryContentDate />
          <DiaryContentRating />
        </div>
        <DiaryCategories />
        <DiaryContentDetail />
        <DiaryContentEditButton />
      </div>
    </DiaryContentProvider>
  );
};

export default DiaryContent;
