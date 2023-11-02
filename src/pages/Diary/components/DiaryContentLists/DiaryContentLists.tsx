import { useState } from 'react';
import { DiaryHeader } from '~/pages/Diary/components/DiaryCommon';
import DiaryItems from '~/pages/Diary/components/DiaryContentLists/DiaryItems';
import DiaryNotContent from '~/pages/Diary/components/DiaryContentLists/DiaryNotContent';

const DiaryContentLists = () => {
  const pictures = [
    'https://picsum.photos/200',
    'https://picsum.photos/200',
    'https://picsum.photos/200',
  ] as string[];

  const [deleteMode, setDeleteMode] = useState(false);

  const handleDeleteMode = () => {
    setDeleteMode(!deleteMode);
  };

  const DeleteButton = () =>
    pictures.length ? (
      <button
        onClick={handleDeleteMode}
        className={`text btn-small w-full rounded-xl ${
          deleteMode
            ? 'bg-base-primary text-base-white'
            : 'border border-grey-200 bg-base-white text-grey-400'
        }`}
      >
        {deleteMode ? '삭제하기' : '선택 삭제'}
      </button>
    ) : null;

  const DiaryListArea = () =>
    pictures.length ? (
      <DiaryItems pictures={pictures} deleteMode={deleteMode} />
    ) : (
      <DiaryNotContent />
    );

  return (
    <>
      <div className="flex h-full w-full max-w-[20rem] flex-col gap-14 overflow-y-auto overflow-x-hidden">
        <div className="flex items-center justify-between">
          <DiaryHeader />
          <DeleteButton />
        </div>
        <DiaryListArea />
      </div>
    </>
  );
};

export default DiaryContentLists;
