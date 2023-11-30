import DiaryRecords from './DiaryRecords';
import DiarySearchBar from './DiarySearchBar';
import DiarySearchResults from '~/pages/Diary/components/DiaryMain/DiarySearchResults';
import useDiaryContext from '~/pages/Diary/hooks/Diary/useDiaryContext';

const DiaryMain = () => {
  const { searchMode } = useDiaryContext();

  return (
    <div className="flex w-full flex-col gap-10 overflow-y-auto overflow-x-hidden">
      <DiarySearchBar />
      {searchMode ? <DiarySearchResults /> : <DiaryRecords />}
    </div>
  );
};

export default DiaryMain;
