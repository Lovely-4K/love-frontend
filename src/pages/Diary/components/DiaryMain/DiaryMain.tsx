import DiaryRecords from './DiaryRecords';
import DiarySearchBar from './DiarySearchBar';
import DiarySearchResults from '~/pages/Diary/components/DiaryMain/DiarySearchResults';
import { DiaryMainProvider } from '~/pages/Diary/contexts/DiaryMainContext';
import { DiaryMapProvider } from '~/pages/Diary/contexts/DiaryMapContext';
import useInputRef from '~/pages/Diary/hooks/useInputRef';

const DiaryMain = () => {
  const { searchMode } = useInputRef();

  return (
    <DiaryMainProvider>
      <DiaryMapProvider>
        <div className="flex w-full flex-col gap-10 overflow-y-auto overflow-x-hidden">
          <DiarySearchBar />
          {searchMode ? <DiarySearchResults /> : <DiaryRecords />}
        </div>
      </DiaryMapProvider>
    </DiaryMainProvider>
  );
};

export default DiaryMain;
