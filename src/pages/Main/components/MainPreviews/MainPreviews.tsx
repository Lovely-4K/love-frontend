import { Link } from 'react-router-dom';
import MainPreviewCalendar from './MainPreviewCalendar';
import MainPreviewDiary from './MainPreviewDiary';
import MainPreviewItem from './MainPreviewItem';
import MainPreviewQuestion from './MainPreviewQuestion';

const MainPreviews = () => {
  return (
    <div className="flex h-full w-full flex-col pt-8 md:flex-row md:justify-center md:px-4">
      <MainPreviewItem
        pageLink={'/calendar'}
        title={'다가오는 일정 →'}
        content={<MainPreviewCalendar />}
      />
      <MainPreviewItem
        pageLink={'/diary'}
        title={'우리의 추억들 →'}
        content={<MainPreviewDiary />}
      />
      <MainPreviewItem
        pageLink={'/question'}
        title={'오늘의 질문 →'}
        content={<MainPreviewQuestion />}
      />
    </div>
  );
};

export default MainPreviews;
