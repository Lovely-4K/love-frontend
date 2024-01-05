import { Outlet } from 'react-router-dom';
import { DiarySideBar } from './components/DiaryCommon';
import DiaryMap from '~/pages/Diary/components/DiaryMap/DiaryMap';

const Diary = () => {
  return (
    <div className="h-full w-full">
      <DiarySideBar>
        <Outlet />
      </DiarySideBar>
      <DiaryMap />
    </div>
  );
};

export default Diary;
