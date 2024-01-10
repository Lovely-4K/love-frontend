import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import {
  mapCategoryAtom,
  searchKeywordAtom,
  searchModeAtom,
} from '~/stores/diaryAtoms';

const useInputRef = () => {
  const setSearchKeyword = useSetAtom(searchKeywordAtom);
  const [searchMode, setSearchMode] = useAtom(searchModeAtom);
  const mapCategory = useAtomValue(mapCategoryAtom);

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setSearchKeyword(event.currentTarget.value);
    }
  };

  const searchModeToggle = () => {
    setSearchMode(!searchMode);
  };

  const endSearchMode = () => {
    setSearchMode(false);
  };

  const startSearchMode = () => {
    setSearchMode(true);
  };

  const categorySearchMode = () => {
    setSearchMode(true);
    if (mapCategory) {
      setSearchKeyword('');
    }
  };

  return {
    setSearchKeyword,
    handleKeyUp,
    searchModeToggle,
    endSearchMode,
    startSearchMode,
    categorySearchMode,
  };
};

export default useInputRef;
