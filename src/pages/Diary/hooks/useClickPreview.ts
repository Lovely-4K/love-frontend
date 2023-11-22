import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from '~/router';
import { DiaryContent } from '~/types';
import { DiaryMapContext } from '~/pages/Diary/contexts/DiaryMapContext';
import useInfoToggle from '~/pages/Diary/hooks/useInfoToggle';
import useSideBar from '~/pages/Diary/hooks/useSideBar';
import { MapMarker } from '~/types/map';

const useClickPreview = () => {
  const navigate = useNavigate();
  const diaryMapContext = useContext(DiaryMapContext);

  if (!diaryMapContext) throw new Error('Cannot find diaryMapProvider');

  // const { setInfo } = diaryMapContext;
  // const { openInfo } = useInfoToggle();

  const handleClickPreview = (preview: DiaryContent) => {
    // setInfo(preview);
    // openInfo();
    navigate(`${paths.DIARY.ROOT}/${preview.kakaoMapId}/${preview.diaryId}`);
  };

  return { handleClickPreview };
};

export default useClickPreview;
