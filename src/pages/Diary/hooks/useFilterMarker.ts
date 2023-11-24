import { useCallback, useContext, useEffect } from 'react';
import { DiaryContent, MapMarker } from '~/types';
import { DiaryContext } from '~/pages/Diary/contexts/DiaryContext';
import {
  DiaryMapContext,
  MarkerFilter,
} from '~/pages/Diary/contexts/DiaryMapContext';
import useGetDiarys from '~/pages/Diary/hooks/useGetDiarys';

// interface HandleFilterMarkerProps {
//   markers: MapMarker[];
//   diaryContent: DiaryContent[];
//   markerFilter: MarkerFilter;
// }

const useFilterMarker = () => {
  const diaryMapContext = useContext(DiaryMapContext);
  const diaryContext = useContext(DiaryContext);

  if (!diaryMapContext) throw new Error('Cannot find diaryMapProvider');
  if (!diaryContext) throw new Error('Cannot find diaryProvider');

  const {
    markerFilter,
    setMarkerFilter,
    goneMarkers,
    setGoneMarkers,
    yetMarkers,
    setYetMarkers,
  } = diaryMapContext;
  const { markers, diarys } = diaryContext;

  const handleFilterMarker = () => {
    const diaryContent = diarys.content;

    const gone = markers.filter((marker) => {
      return diaryContent.find(
        (diaryContent) => diaryContent.kakaoMapId === Number(marker.spotId),
      );
    });

    const yet = markers.filter((marker) => {
      return !diaryContent.find(
        (diaryContent) => diaryContent.kakaoMapId === Number(marker.spotId),
      );
    });

    console.log(gone, yet, markerFilter, diaryContent, markers);

    if (markerFilter === 'ALL') {
      setGoneMarkers(gone);
      setYetMarkers(yet);
    } else if (markerFilter === 'GONE') {
      setGoneMarkers(gone);
      setYetMarkers([]);
    } else if (markerFilter === 'YET') {
      setGoneMarkers([]);
      setYetMarkers(yet);
    }

    return false;
  };

  const handleFilter = (markerFilter: MarkerFilter) => {
    setMarkerFilter((prevFilter) => {
      switch (markerFilter) {
        case 'ALL':
          return 'GONE';
        case 'GONE':
          return 'YET';
        case 'YET':
          return 'ALL';
        default:
          return prevFilter;
      }
    });
  };

  useEffect(() => {
    handleFilterMarker();
  }, [markerFilter, markers]);

  return {
    markerFilter,
    setMarkerFilter,
    handleFilterMarker,
    handleFilter,
    yetMarkers,
    goneMarkers,
  };
};

export default useFilterMarker;
