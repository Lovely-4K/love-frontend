import { IconSearch } from '~/assets/icons';
import { DiaryPreviewItem } from '~/components/domain';
import CategoryList from '~/components/domain/CategoryList/CategoryList';
import DiaryRecords from '~/pages/Diary/components/DiaryMain/DiaryRecords';
import DiarySearchBar from '~/pages/Diary/components/DiaryMain/DiarySearchBar';
import DiaryCategoryList from '~/pages/Diary/components/DiaryMain/DidaryCategoryList';

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
