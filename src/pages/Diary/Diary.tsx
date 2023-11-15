import { DiarySideBar } from '~/pages/Diary/components/DiaryCommon';
import DiaryMap from '~/pages/Diary/components/DiaryCommon/DiaryMap';
import { DiaryMapProvider } from '~/pages/Diary/contexts/DiaryMapContext';
import { DiaryProvider } from '~/pages/Diary/contexts/DiaryProvider';
import { DiarySideBarProvider } from '~/pages/Diary/contexts/DiarySideBarContext';

const Diary = () => {
  return (
    <DiaryProvider>
      <div className="h-full w-full">
        <DiarySideBarProvider>
          <DiarySideBar />
        </DiarySideBarProvider>
        <DiaryMapProvider>
          <DiaryMap />
        </DiaryMapProvider>
      </div>
    </DiaryProvider>
  );
};

export default Diary;
