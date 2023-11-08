import DiaryRecords from './DiaryRecords';
import DiarySearchBar from './DiarySearchBar';
import DiaryCategories from '~/pages/Diary/components/DiaryCommon/DiaryCategories';

const DiaryMain = () => {
  return (
    <div className="flex w-full max-w-[20rem] flex-col gap-10 overflow-y-auto overflow-x-hidden">
      <DiarySearchBar />
      <DiaryCategories />
      <DiaryRecords />
    </div>
  );
};

export default DiaryMain;
