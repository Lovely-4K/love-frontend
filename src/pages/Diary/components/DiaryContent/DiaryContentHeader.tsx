import { memo } from 'react';
import { paths } from '~/router';
import useDiaryContentContext from '../../hooks/DiaryContent/useDiaryContentContext';
import { DiaryHeader } from '~/pages/Diary/components/DiaryCommon';
import useDiary from '~/pages/Diary/hooks/Diary/useDiary';

const DiaryContentHeader = memo(() => {
  const { editable, diary, methods } = useDiaryContentContext();
  const { kakaoMapId } = diary;
  const { handleEditMode, handleDeleteDiary } = methods;
  const { DIARY } = paths;
  const prevLink = `${DIARY.ROOT}/${kakaoMapId}`;
  const { info } = useDiary();

  if (!info) return;

  const HeaderButton = () =>
    editable || (
      <div className="flex gap-2 text-sm text-grey-400">
        <button onClick={handleEditMode}>수정</button>
        <button onClick={handleDeleteDiary}>삭제</button>
      </div>
    );

  return (
    <div className="flex items-center justify-between">
      <DiaryHeader prevLink={prevLink} spotName={info.content} />
      <HeaderButton />
    </div>
  );
});

export default DiaryContentHeader;
