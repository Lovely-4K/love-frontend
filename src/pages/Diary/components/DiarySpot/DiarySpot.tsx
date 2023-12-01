import DiaryListArea from './DiaryListArea';
import DiarySpotHeader from './DiarySpotHeader';
import DiarySpotProvider from '~/pages/Diary/contexts/DiarySpotContext';

const DiarySpot = () => {
  return (
    <DiarySpotProvider>
      <div className="flex h-full max-h-screen w-full flex-col gap-8">
        <DiarySpotHeader />
        <DiaryListArea />
      </div>
    </DiarySpotProvider>
  );
};

export default DiarySpot;
