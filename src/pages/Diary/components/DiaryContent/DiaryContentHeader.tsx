import { memo } from 'react';
import useDiaryContentHeader from '../../hooks/DiaryContent/useDiaryContentHeader';
import { DiaryHeader } from '~/pages/Diary/components/DiaryCommon';

const DiaryContentHeader = memo(() => {
  const { editable, prevLink, placeName, handleStartEdit, handleDeleteDiary } =
    useDiaryContentHeader();

  return (
    <div className="flex items-center justify-between">
      <DiaryHeader prevLink={prevLink} spotName={placeName} />
      {!editable && (
        <div className="flex gap-2 text-sm text-grey-400">
          <button onClick={handleStartEdit}>수정</button>
          <button onClick={handleDeleteDiary}>삭제</button>
        </div>
      )}
    </div>
  );
});

export default DiaryContentHeader;
