import DiaryRecords from './DiaryRecords';
import DiarySearchBar from './DiarySearchBar';
import DiaryCategories from '~/pages/Diary/components/DiaryCommon/DiaryCategories';
import DiarySearchResults from '~/pages/Diary/components/DiaryMain/DiarySearchResults';
import { DiaryMainProvider } from '~/pages/Diary/contexts/DiaryMainContext';
import useInputRef from '~/pages/Diary/hooks/useInputRef';

const DiaryMain = () => {
  const { searchMode } = useInputRef();

  return (
    <DiaryMainProvider>
      <div className="flex w-full flex-col gap-10 overflow-y-auto overflow-x-hidden">
        <DiarySearchBar />

        <DiaryCategories handleChangeCategory={() => {}} />
        {searchMode ? <DiarySearchResults /> : <DiaryRecords />}
      </div>
    </DiaryMainProvider>
  );
};

export default DiaryMain;
