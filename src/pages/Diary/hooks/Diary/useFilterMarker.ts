import { useEffect } from 'react';
import { MarkerFilter } from '~/pages/Diary/contexts/DiaryMapContext';
import useDiary from '~/pages/Diary/hooks/Diary/useDiary';
import useDiaryMap from '~/pages/Diary/hooks/DiaryMap/useDiaryMap';
import useGetDiarys from '~/services/diary/useGetDiarys';

const useFilterMarker = () => {
  const {
    markerFilter,
    setMarkerFilter,
    goneMarkers,
    setGoneMarkers,
    yetMarkers,
    setYetMarkers,
  } = useDiaryMap();
  const { markers } = useDiary();
  const { data: diarys, isSuccess } = useGetDiarys();

  const handleFilterMarker = () => {
    if (!isSuccess) return;

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
  }, [markerFilter, markers, diarys]);

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
