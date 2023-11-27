import DiaryRecords from './DiaryRecords';
import DiarySearchBar from './DiarySearchBar';
import DiarySearchResults from '~/pages/Diary/components/DiaryMain/DiarySearchResults';
import { DiaryMainProvider } from '~/pages/Diary/contexts/DiaryMainContext';
import useInputRef from '~/pages/Diary/hooks/Diary/useInputRef';

const DiaryMain = () => {
  const { searchMode } = useInputRef();

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
