import { Outlet } from 'react-router-dom';
import { DiarySideBar } from './components/DiaryCommon';
import DiaryMap from '~/pages/Diary/components/DiaryMap/DiaryMap';
import { DiaryProvider } from '~/pages/Diary/contexts/DiaryContext';
import { DiaryMapProvider } from '~/pages/Diary/contexts/DiaryMapContext';

const Diary = () => {
  return (
    <DiaryProvider>
      <div className="h-full w-full">
        <DiaryMapProvider>
          <DiarySideBar>
            <Outlet />
          </DiarySideBar>
          <DiaryMap />
        </DiaryMapProvider>
      </div>
    </DiaryProvider>
  );
};

export default Diary;
