import { useContext } from 'react';
import { DiaryContext } from '~/pages/Diary/contexts/DiaryContext';

const useInputRef = () => {
  const diaryContext = useContext(DiaryContext);

  if (!diaryContext) throw new Error('Cannot find diaryProvider');

  const { searchKeyword, setSearchKeyword } = diaryContext;

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setSearchKeyword(event.currentTarget.value);
    }
  };

  return {
    searchKeyword,
    setSearchKeyword,
    handleKeyUp,
  };
};

export default useInputRef;
