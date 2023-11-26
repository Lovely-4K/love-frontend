import { useContext, useEffect } from 'react';
import { DiaryContext } from '~/pages/Diary/contexts/DiaryContext';
import { DiaryMapContext } from '~/pages/Diary/contexts/DiaryMapContext';
import useInfoToggle from '~/pages/Diary/hooks/useInfoToggle';
import useInputRef from '~/pages/Diary/hooks/useInputRef';

const useMapCategory = () => {
  const diaryContext = useContext(DiaryContext);

  if (!diaryContext) throw new Error('Cannot find diaryProvider');

  const { mapCategory, setMapCategory } = diaryContext;
  const { startSearchMode, setSearchKeyword } = useInputRef();
  const { closeInfo } = useInfoToggle();

  const translateCategory = (
    category: 'CAFE' | 'FOOD' | 'ACCOMODATION' | 'CULTURE',
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

  const handleMapCategory = (
    category: 'CAFE' | 'FOOD' | 'ACCOMODATION' | 'CULTURE',
  ) => {
    setMapCategory(category);
    startSearchMode();
    closeInfo();
    // setSearchKeyword(translateCategory(category));
  };

  const resetMapCategory = () => {
    setMapCategory('');
    console.log('reset한다', mapCategory);
  };

  return { mapCategory, setMapCategory, handleMapCategory, resetMapCategory };
};

export default useMapCategory;
