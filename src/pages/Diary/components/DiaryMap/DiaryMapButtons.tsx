import { SelectCoupleBtn, SelectCurrentBtn } from '~/assets/icons';
import useCurrentLocation from '~/pages/Diary/hooks/useCurrentLocation';

const DiaryMapButtons = () => {
  const { setCenter } = useCurrentLocation();

  return (
    <div className="absolute right-4 top-4 z-50 flex flex-col gap-2">
      <button className="">
        <SelectCoupleBtn className="h-12" />
      </button>
      <button className="">
        <SelectCurrentBtn className="h-12" onClick={setCenter} />
      </button>
    </div>
  );
};

export default DiaryMapButtons;
