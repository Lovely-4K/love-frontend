import { paths } from '~/router';
import useDiaryContent from '../../hooks/DiaryContent/useDiaryContent';
import { DiaryHeader } from '~/pages/Diary/components/DiaryCommon';

const DiaryContentHeader = () => {
  const { editable, handleEditMode, spotId } = useDiaryContent();
  const { DIARY } = paths;

  const HeaderButton = () =>
    editable || (
      <div className="flex gap-2 text-sm text-grey-400">
        <button onClick={handleEditMode}>수정</button>
        <button>삭제</button>
      </div>
    );

  return (
    <div className="flex items-center justify-between">
      <DiaryHeader keyword={''} prevPageLink={`${DIARY.ROOT}/${spotId}`} />
      <HeaderButton />
    </div>
  );
};

export default DiaryContentHeader;
