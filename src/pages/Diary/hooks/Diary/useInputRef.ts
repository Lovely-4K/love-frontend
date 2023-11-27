import { DiaryContextProps } from '~/pages/Diary/contexts/DiaryContext';

interface useInputRefProps {
  setSearchKeyword: DiaryContextProps['setSearchKeyword'];
  searchMode: DiaryContextProps['searchMode'];
  setSearchMode: DiaryContextProps['setSearchMode'];
  mapCategory: DiaryContextProps['mapCategory'];
}

const useInputRef = ({
  setSearchKeyword,
  searchMode,
  setSearchMode,
  mapCategory,
}: useInputRefProps) => {
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
