import { memo } from 'react';
import { paths } from '~/router';
import useDiaryContentContext from '../../hooks/DiaryContent/useDiaryContentContext';
import { DiaryHeader } from '~/pages/Diary/components/DiaryCommon';
import useDiaryContext from '~/pages/Diary/hooks/Diary/useDiaryContext';

const DiaryContentHeader = memo(() => {
  const { editable, diary, methods } = useDiaryContentContext();
  const { info } = useDiaryContext();
  const { kakaoMapId, placeName } = diary;
  const { handleEditMode, handleDeleteDiary } = methods;
  const { DIARY } = paths;
  const prevLink = info ? `${DIARY.ROOT}/${kakaoMapId}` : `${DIARY.ROOT}`;

  const HeaderButton = () =>
    editable || (
      <div className="flex gap-2 text-sm text-grey-400">
        <button onClick={handleEditMode}>수정</button>
        <button onClick={handleDeleteDiary}>삭제</button>
      </div>
    );

  return (
    <div className="flex items-center justify-between">
      <DiaryHeader prevLink={prevLink} spotName={info?.content || placeName} />
      {!editable && <HeaderButton />}
    </div>
  );
});

export default DiaryContentHeader;
