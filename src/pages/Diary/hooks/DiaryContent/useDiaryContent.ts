import { useContext } from 'react';
import { DiaryContentContext } from '~/pages/Diary/contexts/DiaryContentContext';

const useDiaryContent = () => {
  const diaryContentContext = useContext(DiaryContentContext);
  const { editable, setEditable, diary, spotId, diaryId } = diaryContentContext;

  const handleEditMode = () => {
    setEditable(true);
  };

  const handleEditComplete = () => {
    setEditable(false);
  };

  const handleEditCancel = () => {
    setEditable(false);
  };

  return {
    editable,
    handleEditMode,
    handleEditComplete,
    handleEditCancel,
    spotId,
    diaryId,
    diary,
  };
};

export default useDiaryContent;
