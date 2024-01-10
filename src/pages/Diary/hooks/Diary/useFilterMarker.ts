import { useAtom, useAtomValue } from 'jotai';
import { useEffect } from 'react';
import useInfoToggle from '~/pages/Diary/hooks/Diary/useInfoToggle';

import { markersAtom, rootDiarysAtom } from '~/stores/diaryAtoms';
import {
  MarkerFilter,
  goneMarkersAtom,
  markerFilterAtom,
  yetMarkersAtom,
} from '~/stores/diaryMapAtoms';

const useFilterMarker = () => {
  const [markerFilter, setMarkerFilter] = useAtom(markerFilterAtom);
  const [goneMarkers, setGoneMarkers] = useAtom(goneMarkersAtom);
  const [yetMarkers, setYetMarkers] = useAtom(yetMarkersAtom);

  const { closeInfo } = useInfoToggle();
  const diaryContent = useAtomValue(rootDiarysAtom);
  const markers = useAtomValue(markersAtom);

  const handleFilterMarker = () => {
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
  }, [markerFilter, markers, diaryContent]);

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
