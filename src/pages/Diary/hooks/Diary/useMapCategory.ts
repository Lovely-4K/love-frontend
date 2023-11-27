import { useEffect } from 'react';
import categoryType from '~/components/common/CategoryButton/CategoryTypes';
import useDiary from '~/pages/Diary/hooks/Diary/useDiary';
import useInputRef from '~/pages/Diary/hooks/Diary/useInputRef';

const useMapCategory = () => {
  const { mapCategory, setMapCategory, methods } = useDiary();
  const { startSearchMode, setSearchKeyword, searchKeyword } = useInputRef();
  const { closeInfo } = methods.handleInfo;

  const translateCategory = (
    category: 'CAFE' | 'FOOD' | 'ACCOMODATION' | 'CULTURE' | '',
  ) => {
    let newCategory = '';

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

  const handleMapCategory = (category: categoryType) => {
    if (category === 'ETC') return;

    setMapCategory(category);
    startSearchMode();
    closeInfo();
  };

  const resetMapCategory = () => {
    setMapCategory('');
  };

  useEffect(() => {
    if (searchKeyword) resetMapCategory();
  }, [searchKeyword, setSearchKeyword]);

  return {
    mapCategory,
    setMapCategory,
    handleMapCategory,
    resetMapCategory,
    translateCategory,
  };
};

export default useMapCategory;
