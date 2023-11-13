import { useContext } from 'react';
import DiaryNotContent from './DiaryNotContent';
import DiarySpotPreviews from './DiarySpotPreviews';
import { DiarySpotContext } from '~/pages/Diary/contexts/DiarySpotContent';

const DiaryListArea = () => {
  const { pictures } = useContext(DiarySpotContext);

  return pictures.length ? <DiarySpotPreviews /> : <DiaryNotContent />;
};

export default DiaryListArea;
