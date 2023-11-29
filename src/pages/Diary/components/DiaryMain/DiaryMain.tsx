import DiaryRecords from './DiaryRecords';
import DiarySearchBar from './DiarySearchBar';
import DiarySearchResults from '~/pages/Diary/components/DiaryMain/DiarySearchResults';
import { DiaryMainProvider } from '~/pages/Diary/contexts/DiaryMainContext';
import useDiaryContext from '~/pages/Diary/hooks/Diary/useDiaryContext';

const DiaryMain = () => {
  const { searchMode } = useDiaryContext();

  return (
    <DiaryMainProvider>
      <div className="flex w-full flex-col gap-10 overflow-y-auto overflow-x-hidden">
        <DiarySearchBar />
        {searchMode ? <DiarySearchResults /> : <DiaryRecords />}
      </div>
    </DiaryMainProvider>
  );
};

export default DiaryMain;
