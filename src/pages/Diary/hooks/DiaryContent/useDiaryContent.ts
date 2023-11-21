import { useContext } from 'react';
import { DiaryContentContext } from '~/pages/Diary/contexts/DiaryContentContext';

const useDiaryContent = () => {
  const diaryContentContext = useContext(DiaryContentContext);
  const { editMode, setEditMode } = diaryContentContext;

  const handleEditMode = () => {
    setEditMode(true);
  };

  const handleEditComplete = () => {
    setEditMode(false);
  };

  const handleEditCancel = () => {
    setEditMode(false);
  };

  return {
    editMode,
    handleEditMode,
    handleEditComplete,
    handleEditCancel,
  };
};

export default useDiaryContent;
