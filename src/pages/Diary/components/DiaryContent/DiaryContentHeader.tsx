import { memo } from 'react';
import { paths } from '~/router';
import useDiaryContentContext from '../../hooks/DiaryContent/useDiaryContentContext';
import { DiaryHeader } from '~/pages/Diary/components/DiaryCommon';

const DiaryContentHeader = memo(() => {
  const { editable, diary, methods } = useDiaryContentContext();
  const { kakaoMapId, placeName } = diary;
  const { handleEditMode } = methods;
  const { DIARY } = paths;
  const prevLink = `${DIARY.ROOT}/${kakaoMapId}`;

  const HeaderButton = () =>
    editable || (
      <div className="flex gap-2 text-sm text-grey-400">
        <button onClick={handleEditMode}>수정</button>
        <button>삭제</button>
      </div>
    );

  return (
    <div className="flex items-center justify-between">
      <DiaryHeader prevLink={prevLink} spotName={placeName} />
      <HeaderButton />
    </div>
  );
});

export default DiaryContentHeader;
