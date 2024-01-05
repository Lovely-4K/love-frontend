import DiaryListArea from './DiaryListArea';
import DiarySpotHeader from './DiarySpotHeader';

const DiarySpot = () => {
  return (
    <div className="flex h-full max-h-screen w-full flex-col gap-8">
      <DiarySpotHeader />
      <DiaryListArea />
    </div>
  );
};

export default DiarySpot;
