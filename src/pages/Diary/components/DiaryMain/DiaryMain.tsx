import DiaryRecords from './DiaryRecords';
import DiarySearchBar from './DiarySearchBar';
import DiaryCategoryList from '~/pages/Diary/components/DiaryCommon/DiaryCategoryList';

const DiaryMain = () => {
  return (
    <>
      <div className="flex w-full max-w-[20rem] flex-col gap-10 overflow-y-auto overflow-x-hidden">
        <DiarySearchBar />
        <DiaryCategoryList />
        <DiaryRecords />
      </div>
    </>
  );
};

export default DiaryMain;
