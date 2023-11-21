import useDiaryContent from '../../hooks/DiaryContent/useDiaryContent';
import { DiaryHeader } from '~/pages/Diary/components/DiaryCommon';

const DiaryContentHeader = () => {
  const { editMode, handleEditMode } = useDiaryContent();

  const HeaderButton = () =>
    editMode || (
      <div className="flex gap-2 text-sm text-grey-400">
        <button onClick={handleEditMode}>수정</button>
        <button>삭제</button>
      </div>
    );

  return (
    <div className="flex items-center justify-between">
      <DiaryHeader />
      <HeaderButton />
    </div>
  );
};

export default DiaryContentHeader;
