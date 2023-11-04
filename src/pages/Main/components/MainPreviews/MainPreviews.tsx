import { Link } from 'react-router-dom';
import { screens } from '~/theme';
import MainPreviewCalendar from './MainPreviewCalendar';
import MainPreviewDiary from './MainPreviewDiary';
import MainPreviewItem from './MainPreviewItem';
import MainPreviewQuestion from './MainPreviewQuestion';

const MainPreviews = () => {
  return (
    <div className="flex h-full w-full flex-col pt-8 md:flex-row md:justify-center md:px-4">
      {/* <MainPreviewItem
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
      /> */}
      <div className="mx-4 flex h-full flex-col rounded-xl px-4 py-3 md:w-1/3 md:border md:border-solid md:border-grey-200">
        <Link to={'/'} className="font-title my-2 w-full font-bold">
          다가오는 일정 →
        </Link>
        <MainPreviewCalendar />
      </div>
    </div>
  );
};

export default MainPreviews;
