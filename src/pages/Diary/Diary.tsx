import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { DiarySideBar } from './components/DiaryCommon';
import DiaryLoading from './DiaryLoading';
import DiaryMap from '~/pages/Diary/components/DiaryMap/DiaryMap';
import { DiaryProvider } from '~/pages/Diary/contexts/DiaryContext';
import { DiaryMapProvider } from '~/pages/Diary/contexts/DiaryMapContext';

const Diary = () => {
  return (
    <React.Suspense fallback={<DiaryLoading />}>
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
    </React.Suspense>
  );
};

export default Diary;
