import { useContext } from 'react';
import { DiaryContext } from '~/pages/Diary/contexts/DiaryProvider';

const useInputRef = () => {
  const diaryContext = useContext(DiaryContext);

  if (!diaryContext) throw new Error('Cannot find diaryProvider');

  const { searchInputRef, searchKeyword, setSearchKeyword } = diaryContext;

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setSearchKeyword(event.currentTarget.value);
    }
  };

  return {
    searchInputRef,
    searchKeyword,
    setSearchKeyword,
    handleKeyPress,
  };
};

export default useInputRef;
