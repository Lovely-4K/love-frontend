import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { MapMarker } from '~/types';
import useMapLocation from '~/pages/Diary/hooks/Diary/useCurrentLocation';
import useInfoToggle from '~/pages/Diary/hooks/Diary/useInfoToggle';
import useInputRef from '~/pages/Diary/hooks/Diary/useInputRef';
import useMapCategory from '~/pages/Diary/hooks/Diary/useMapCategory';
import { mapAtom, markersAtom, searchKeywordAtom } from '~/stores/diaryAtoms';

const useSearch = () => {
  const { startSearchMode } = useInputRef();
  const { resetMapCategory } = useMapCategory();
  const { useCurrentLocation } = useMapLocation();
  const { closeInfo } = useInfoToggle();
  const map = useAtomValue(mapAtom);
  const setMarkers = useSetAtom(markersAtom);
  const [searchKeyword, setSearchKeyword] = useAtom(searchKeywordAtom);

  const useSearchLocation = (keyword: string) => {
    const { userPosition } = useCurrentLocation();

    useEffect(() => {
      if (!map || !keyword) return;
      if (!userPosition) return;

      const position = new kakao.maps.services.Places();
      const allMarkers: MapMarker[] = [];

      const searchPlaces = (page: number) => {
        position.keywordSearch(
          keyword,
          (
            data: kakao.maps.services.PlacesSearchResult,
            status,
            _pagination,
          ) => {
            if (status === kakao.maps.services.Status.OK) {
              const bounds = new kakao.maps.LatLngBounds();
              const markers = [];

              for (let i = 0; i < data.length; i++) {
                markers.push({
                  position: {
                    lat: Number(data[i].y),
                    lng: Number(data[i].x),
                  },
                  content: data[i].place_name,
                  address: data[i].address_name,
                  phone: data[i].phone,
                  spotId: data[i].id,
                });

                bounds.extend(
                  new kakao.maps.LatLng(Number(data[i].y), Number(data[i].x)),
                );
              }

              allMarkers.push(...markers);
              if (page < _pagination.last) {
                searchPlaces(page + 1);
              } else {
                resetMapCategory();
                setSearchKeyword(keyword);
                setMarkers(allMarkers);
                closeInfo();
                map.setBounds(bounds);
                startSearchMode();
              }
            } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
              startSearchMode();
              setMarkers([]);
            }
          },
          { page },
        );
      };

      searchPlaces(1);
    }, [map, keyword, setMarkers, searchKeyword, setSearchKeyword]);
  };

  return { useSearchLocation };
};

export default useSearch;
