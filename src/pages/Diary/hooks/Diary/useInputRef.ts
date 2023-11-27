import useDiary from '~/pages/Diary/hooks/Diary/useDiary';

const useInputRef = () => {
  const {
    searchKeyword,
    setSearchKeyword,
    searchMode,
    setSearchMode,
    mapCategory,
  } = useDiary();

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
    searchKeyword,
    setSearchKeyword,
    handleKeyUp,
    searchMode,
    searchModeToggle,
    endSearchMode,
    startSearchMode,
    categorySearchMode,
  };
};

export default useInputRef;
