import MainPreviewCalendar from './MainPreviewCalendar';
import MainPreviewDiary from './MainPreviewDiary';
import MainPreviewItem from './MainPreviewItem';
import MainPreivewQuestion from './MainPreviewQuestion';

const MainPreviews = () => {
  return (
    <div>
      <MainPreviewItem
        title={'다가오는 일정'}
        content={<MainPreviewCalendar />}
      />
      <MainPreviewItem title={'우리의 추억들'} content={<MainPreviewDiary />} />
      <MainPreviewItem
        title={'오늘의 질문'}
        content={<MainPreivewQuestion />}
      />
    </div>
  );
};

export default MainPreviews;
