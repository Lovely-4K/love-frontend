import DiaryContentDate from './DiaryContentDate';
import DiaryContentRating from './DiaryContentRating';
import { DiaryCategoryList } from '~/pages/Diary/components/DiaryCommon';
import DiaryContentDetail from '~/pages/Diary/components/DiaryContent/DiaryContentDetail';
import DiaryContentEditButton from '~/pages/Diary/components/DiaryContent/DiaryContentEditButton';
import DiaryContentHeader from '~/pages/Diary/components/DiaryContent/DiaryContentHeader';
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
        <DiaryCategoryList />
        <DiaryContentDetail />
        <DiaryContentEditButton />
      </div>
    </DiaryContentProvider>
  );
};

export default DiaryContent;
