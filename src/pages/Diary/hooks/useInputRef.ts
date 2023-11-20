import { useContext } from 'react';
import { DiaryContext } from '~/pages/Diary/contexts/DiaryContext';

const useInputRef = () => {
  const diaryContext = useContext(DiaryContext);

  if (!diaryContext) throw new Error('Cannot find diaryProvider');

  const { searchKeyword, setSearchKeyword, searchMode, setSearchMode } =
    diaryContext;

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

  return {
    searchKeyword,
    setSearchKeyword,
    handleKeyUp,
    searchMode,
    searchModeToggle,
    endSearchMode,
    startSearchMode,
  };
};

export default useInputRef;
