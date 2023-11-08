import DiaryRecords from './DiaryRecords';
import DiarySearchBar from './DiarySearchBar';
import DiaryCategories from '~/pages/Diary/components/DiaryCommon/DiaryCategories';
import { DiaryMainProvider } from '~/pages/Diary/contexts/DiaryMainContext';

const DiaryMain = () => {
  return (
    <DiaryMainProvider>
      <div className="flex w-full flex-col gap-10 overflow-y-auto overflow-x-hidden">
        <DiarySearchBar />
        <DiaryCategories />
        <DiaryRecords />
      </div>
    </DiaryMainProvider>
  );
};

export default DiaryMain;
