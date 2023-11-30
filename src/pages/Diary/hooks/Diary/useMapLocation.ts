import { useEffect } from 'react';
import { MapMarker } from '~/types';
import { DiaryContextProps } from '~/pages/Diary/contexts/DiaryContext';

interface useSearchLocationProps {
  map: DiaryContextProps['map'];
  searchKeyword: DiaryContextProps['searchKeyword'];
  handleInput: DiaryContextProps['methods']['handleInput'];
  handleMapCategories: DiaryContextProps['methods']['handleMapCategories'];
  handleLocation: DiaryContextProps['methods']['handleLocation'];
  handleMarkers: DiaryContextProps['methods']['handleMarkers'];
}

const useSearch = ({
  map,
  searchKeyword,
  handleInput,
  handleMapCategories,
  handleLocation,
  handleMarkers,
}: useSearchLocationProps) => {
  const { startSearchMode, setSearchKeyword } = handleInput;
  const { resetMapCategory } = handleMapCategories;
  const { useCurrentLocation } = handleLocation;
  const { setMarkers } = handleMarkers;

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
                map.setBounds(bounds);
                startSearchMode();
              }
            } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
              setMarkers([]);
            } else if (status === kakao.maps.services.Status.ERROR) {
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
