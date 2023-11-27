import DiaryRecords from './DiaryRecords';
import DiarySearchBar from './DiarySearchBar';
import DiarySearchResults from '~/pages/Diary/components/DiaryMain/DiarySearchResults';
import { DiaryMainProvider } from '~/pages/Diary/contexts/DiaryMainContext';
import useDiary from '~/pages/Diary/hooks/Diary/useDiary';

const DiaryMain = () => {
  const { searchMode } = useDiary();

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
