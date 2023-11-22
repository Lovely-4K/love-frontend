import { useLocation } from 'react-router-dom';
import DiaryListArea from './DiaryListArea';
import DiarySpotHeader from './DiarySpotHeader';
import { DiarySpotProvider } from '~/pages/Diary/contexts/DiarySpotContent';

const DiarySpot = () => {
  const locate = useLocation();
  const { lat, lng } = locate.state;

  return (
    <DiarySpotProvider>
      <div className="flex h-full w-full flex-col gap-14 overflow-y-auto overflow-x-hidden">
        <DiarySpotHeader />
        <DiaryListArea />
      </div>
    </DiarySpotProvider>
  );
};

export default DiarySpot;
