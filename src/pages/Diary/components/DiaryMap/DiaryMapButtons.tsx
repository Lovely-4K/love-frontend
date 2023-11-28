import { SelectCurrentBtn } from '~/assets/icons';
import { MapFilterButton } from '~/components/common';
import useDiary from '~/pages/Diary/hooks/Diary/useDiary';
import useFilterMarker from '~/pages/Diary/hooks/Diary/useFilterMarker';

const DiaryMapButtons = () => {
  const {
    methods: { handleLocation },
  } = useDiary();
  const { useCurrentLocation } = handleLocation;
  const { setCenter } = useCurrentLocation();
  const { markerFilter, handleFilter } = useFilterMarker();

  return (
    <div className="absolute right-2 top-8 z-50 flex flex-col gap-2">
      <MapFilterButton
        type={markerFilter}
        onClick={() => handleFilter(markerFilter)}
      />
      <button className="">
        <SelectCurrentBtn className="h-12" onClick={setCenter} />
      </button>
    </div>
  );
};

export default DiaryMapButtons;
