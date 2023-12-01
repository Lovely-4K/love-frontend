import DiaryRecords from './DiaryRecords';
import DiarySearchBar from './DiarySearchBar';
import DiarySearchResults from '~/pages/Diary/components/DiaryMain/DiarySearchResults';
import useDiaryContext from '~/pages/Diary/hooks/Diary/useDiaryContext';

const DiaryMain = () => {
  const { searchMode } = useDiaryContext();

  return (
    <DiaryMainProvider>
      <div className="flex h-full max-h-screen w-full flex-col gap-5 overflow-x-hidden ">
        <DiarySearchBar />
        {searchMode ? <DiarySearchResults /> : <DiaryRecords />}
      </div>
    </DiaryMainProvider>
  );
};

export default DiaryMain;
