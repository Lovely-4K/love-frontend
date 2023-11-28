import DiaryListArea from './DiaryListArea';
import DiarySpotHeader from './DiarySpotHeader';
import DiarySpotProvider from '~/pages/Diary/contexts/DiarySpotContext';

const DiarySpot = () => {
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
