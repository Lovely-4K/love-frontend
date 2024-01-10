import { useAtomValue } from 'jotai';
import SearchResultsItems from '~/pages/Diary/components/DiaryMain/SearchResultsItems';
import useInputRef from '~/pages/Diary/hooks/Diary/useInputRef';
import useMapCategory from '~/pages/Diary/hooks/Diary/useMapCategory';
import { mapCategoryAtom, searchKeywordAtom } from '~/stores/diaryAtoms';

const DiarySearchResults = () => {
  const mapCategory = useAtomValue(mapCategoryAtom);
  const searchKeyword = useAtomValue(searchKeywordAtom);
  const { endSearchMode } = useInputRef();
  const { translateCategory } = useMapCategory();
  const category = translateCategory(mapCategory);
  const searchMessage = mapCategory ? `내 주변 ${category}` : searchKeyword;

  return (
    <div className="flex flex-col gap-4 overflow-y-hidden">
      <div className="flex gap-2">
        <button onClick={endSearchMode}>{'<'}</button>
        <span className="text-base-primary">{searchMessage} </span>
        <span>검색 결과</span>
      </div>
      <SearchResultsItems />
    </div>
  );
};

export default DiarySearchResults;
