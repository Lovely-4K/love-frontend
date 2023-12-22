import { useAtomValue } from 'jotai';
import DiaryRecords from './DiaryRecords';
import DiarySearchBar from './DiarySearchBar';
import DiarySearchResults from '~/pages/Diary/components/DiaryMain/DiarySearchResults';
import { searchModeAtom } from '~/stores/diaryAtoms';

const DiaryMain = () => {
  const searchMode = useAtomValue(searchModeAtom);

  return (
    <div className="flex h-full max-h-screen w-full flex-col gap-5 overflow-x-hidden ">
      <DiarySearchBar />
      {searchMode ? <DiarySearchResults /> : <DiaryRecords />}
    </div>
  );
};

export default DiaryMain;
