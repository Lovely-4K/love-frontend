import { MapCurPosButton, MapFilterButton } from '~/components/common';
import useMapLocation from '~/pages/Diary/hooks/Diary/useCurrentLocation';

import useFilterMarker from '~/pages/Diary/hooks/Diary/useFilterMarker';

const DiaryMapButtons = () => {
  const { useCurrentLocation } = useMapLocation();
  const { setCenter, isCurrentLocation } = useCurrentLocation();
  const { markerFilter, handleFilter } = useFilterMarker();

  return (
    <div className="absolute right-4 top-8 z-50 flex flex-col gap-2">
      <MapFilterButton
        type={markerFilter}
        onClick={() => handleFilter(markerFilter)}
      />
      <MapCurPosButton
        currentPosition={isCurrentLocation}
        onClick={setCenter}
      ></MapCurPosButton>
    </div>
  );
};

export default DiaryMapButtons;
