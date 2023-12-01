import SearchResultsItems from '~/pages/Diary/components/DiaryMain/SearchResultsItems';
import useDiaryContext from '~/pages/Diary/hooks/Diary/useDiaryContext';

const DiarySearchResults = () => {
  const {
    searchKeyword,
    mapCategory,
    methods: { handleInput, handleMapCategories },
  } = useDiaryContext();
  const { endSearchMode } = handleInput;

  const { translateCategory } = handleMapCategories;
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
