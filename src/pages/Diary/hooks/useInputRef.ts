import { useContext, useEffect } from 'react';
import { DiaryContext } from '~/pages/Diary/contexts/DiaryContext';
import { DiaryMapContext } from '~/pages/Diary/contexts/DiaryMapContext';
import useMapCategory from '~/pages/Diary/hooks/useMapCategory';

const useInputRef = () => {
  const diaryContext = useContext(DiaryContext);
  // const diaryMapContext = useContext(DiaryMapContext);

  if (!diaryContext) throw new Error('Cannot find diaryProvider');
  // if (!diaryMapContext) throw new Error('Cannot find diaryMapProvider');

  const {
    searchKeyword,
    setSearchKeyword,
    searchMode,
    setSearchMode,
    mapCategory,
  } = diaryContext;

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
      console.log(mapCategory);
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
