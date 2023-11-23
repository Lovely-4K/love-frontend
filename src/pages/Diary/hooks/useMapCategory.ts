import { useContext } from 'react';
import { DiaryMapContext } from '~/pages/Diary/contexts/DiaryMapContext';
import useInfoToggle from '~/pages/Diary/hooks/useInfoToggle';
import useInputRef from '~/pages/Diary/hooks/useInputRef';

const useMapCategory = () => {
  const diaryMapContext = useContext(DiaryMapContext);

  if (!diaryMapContext) throw new Error('Cannot find diaryMapProvider');

  const { mapCategory, setMapCategory } = diaryMapContext;
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
  };

  return { mapCategory, setMapCategory, handleMapCategory, resetMapCategory };
};

export default useMapCategory;
