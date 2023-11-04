import { useState } from 'react';
import DiaryContentDate from './DiaryContentDate';
import DiaryContentImgs from './DiaryContentImgs';
import DiaryContentRating from './DiaryContentRating';
import DiaryContentText from './DiaryContentText';
import {
  DiaryCategoryList,
  DiaryHeader,
} from '~/pages/Diary/components/DiaryCommon';

const DiaryContent = () => {
  const [editMode, setEditMode] = useState(false);

  const handleEditMode = () => {
    setEditMode(true);
  };

  const handleEditComplete = () => {
    setEditMode(false);
  };

  const handleEditCancel = () => {
    setEditMode(false);
  };

  const HeaderButton = () =>
    editMode || (
      <div className="font-small flex gap-2 text-grey-400">
        <button onClick={handleEditMode}>수정</button>
        <button>삭제</button>
      </div>
    );

  const EditButton = () =>
    editMode && (
      <div className="flex justify-end gap-2">
        <button
          onClick={handleEditCancel}
          className="btn-small w-full rounded-xl border border-grey-200 text-grey-400"
        >
          취소
        </button>
        <button
          onClick={handleEditComplete}
          className="btn-small w-full rounded-xl border bg-base-primary text-base-white"
        >
          완료
        </button>
      </div>
    );

  return (
    <div className="flex w-full max-w-[20rem] flex-col gap-6 overflow-y-auto overflow-x-hidden">
      <div className="flex items-center justify-between">
        <DiaryHeader />
        <HeaderButton />
      </div>
      <div className="flex items-center justify-between">
        <DiaryContentDate editMode={editMode} />
        <DiaryContentRating editMode={editMode} />
      </div>
      <DiaryCategoryList />
      <div className="flex flex-col gap-2">
        <span className="font-large font-bold text-base-black">
          다이어리 내용
        </span>
        <DiaryContentImgs editMode={editMode} />
        <DiaryContentText editMode={editMode} />
      </div>
      <EditButton />
    </div>
  );
};

export default DiaryContent;
