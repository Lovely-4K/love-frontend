import { useContext } from 'react';
import { DiaryContent, MapMarker } from '~/types';
import { DiaryMapContext } from '~/pages/Diary/contexts/DiaryMapContext';

interface HandleFilterMarkerProps {
  markers: MapMarker[];
  diaryContent: DiaryContent[];
  filterType: 'ALL' | 'GONE' | 'YET' | '';
}

const useFilterMarker = () => {
  const diaryMapContext = useContext(DiaryMapContext);

  if (!diaryMapContext) throw new Error('Cannot find diaryProvider');

  //   const { markerFilter, setMarkerFilter } = diaryMapContext;

  const handleFilterMarker = ({
    markers,
    diaryContent,
    filterType,
  }: HandleFilterMarkerProps) => {
    let filteredMarkers: MapMarker[] = [];

    if (filterType === 'ALL') {
      filteredMarkers = markers;
    } else {
      filteredMarkers = markers.filter((marker) => {
        if (filterType === 'GONE') {
          return diaryContent.find(
            (diaryContent) => diaryContent.kakaoMapId === Number(marker.spotId),
          );
        }
        if (filterType === 'YET') {
          return diaryContent.find(
            (diaryContent) => diaryContent.kakaoMapId !== Number(marker.spotId),
          );
        }

        return false;
      });
    }

    console.log(filteredMarkers);

    return filteredMarkers;
  };

  return { handleFilterMarker };
};

export default useFilterMarker;
