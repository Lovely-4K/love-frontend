import type categoryType from '~/components/common/CategoryButton/CategoryTypes';
import { useEffect } from 'react';
import { DiaryContextProps } from '~/pages/Diary/contexts/DiaryContext';

interface useMapCategoryProps {
  setMapCategory: DiaryContextProps['setMapCategory'];
  searchKeyword: DiaryContextProps['searchKeyword'];
  map: DiaryContextProps['map'];
  mapCategory: DiaryContextProps['mapCategory'];
  handleInfo: DiaryContextProps['methods']['handleInfo'];
  handleInput: DiaryContextProps['methods']['handleInput'];
  handleMarkers: DiaryContextProps['methods']['handleMarkers'];
}

const useMapCategory = ({
  setMapCategory,
  searchKeyword,
  map,
  mapCategory,
  handleInfo,
  handleInput,
  handleMarkers,
}: useMapCategoryProps) => {
  const {
    startSearchMode,
    setSearchKeyword,
    categorySearchMode,
    endSearchMode,
  } = handleInput;
  const { closeInfo } = handleInfo;
  const { setMarkers } = handleMarkers;

  const handleMapCategory = (category: categoryType) => {
    setMapCategory((currCategory) => {
      currCategory = currCategory === category ? undefined : category;

      return currCategory;
    });
  };

  const resetMapCategory = () => {
    setMapCategory(undefined);
  };

  const translateCategory = (category: categoryType | undefined) => {
    let newCategory = undefined;

    switch (category) {
      case 'ACCOMODATION':
        newCategory = '숙박';
        break;
      case 'CAFE':
        newCategory = '카페';
        break;
      case 'FOOD':
        newCategory = '음식점';
        break;
      case 'CULTURE':
        newCategory = '문화시설';
        break;
      default:
    }

    return newCategory;
  };

  const useCategorySearch = () => {
    const searchPlaces = () => {
      if (!map || !mapCategory) return;

      const bounds = new kakao.maps.LatLngBounds();
      let category: 'CE7' | 'FD6' | 'AD5' | 'CT1' | undefined = undefined;

      switch (mapCategory) {
        case 'CAFE':
          category = 'CE7';
          break;
        case 'FOOD':
          category = 'FD6';
          break;
        case 'ACCOMODATION':
          category = 'AD5';
          break;
        case 'CULTURE':
          category = 'CT1';
          break;
      }

      const position = new kakao.maps.services.Places(map);

      if (category === undefined) return;

      // Bounds를 이용하여 카테고리 검색을 요청
      position.categorySearch(
        category,
        (data, status, _pagination) => {
          if (status === kakao.maps.services.Status.OK) {
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
            }

            categorySearchMode();
            setMarkers(markers);
          } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
            // 검색 결과가 없는 경우
          } else if (status === kakao.maps.services.Status.ERROR) {
            // 에러로 인해 검색 결과가 나오지 않은 경우
          }
        },
        { useMapBounds: true, bounds },
      );
    };

    useEffect(() => {
      if (mapCategory === undefined) {
        endSearchMode();
        setMarkers([]);

        return;
      }

      startSearchMode();
      closeInfo();
      searchPlaces();
    }, [mapCategory, map]);

    // idle 이벤트 (지도 이동)
    useEffect(() => {
      if (!map) return;

      kakao.maps.event.addListener(map, 'idle', searchPlaces);

      return () => {
        kakao.maps.event.removeListener(map, 'idle', searchPlaces);
      };
    }, [map, mapCategory]);

    return { setMarkers, map, mapCategory };
  };

  useEffect(() => {
    if (searchKeyword) resetMapCategory();
  }, [searchKeyword, setSearchKeyword]);

  return {
    setMapCategory,
    handleMapCategory,
    resetMapCategory,
    translateCategory,
    useCategorySearch,
  };
};

export default useMapCategory;
