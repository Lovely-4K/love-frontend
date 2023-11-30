import { useEffect } from 'react';
import { MarkerFilter } from '~/pages/Diary/contexts/DiaryMapContext';
import useDiaryContext from '~/pages/Diary/hooks/Diary/useDiaryContext';
import useDiaryMap from '~/pages/Diary/hooks/DiaryMap/useDiaryMap';

const useFilterMarker = () => {
  const {
    markerFilter,
    setMarkerFilter,
    goneMarkers,
    setGoneMarkers,
    yetMarkers,
    setYetMarkers,
  } = useDiaryMap();

  const {
    markers,
    rootDiarys,
    methods: { handleInfo },
  } = useDiaryContext();
  const { closeInfo } = handleInfo;

  const handleFilterMarker = () => {
    const diaryContent = rootDiarys;
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

    closeInfo();
  };
  useEffect(() => {
    handleFilterMarker();
  }, [markerFilter, markers, rootDiarys]);

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
