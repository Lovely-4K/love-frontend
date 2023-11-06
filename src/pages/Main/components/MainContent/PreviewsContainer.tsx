import PreviewCalendar from './PreviewCalendar';
import PreviewDiary from './PreviewDiary';
import PreviewItem from './PreviewItem';
import PreviewQuestion from './PreviewQuestion';

const PreviewsContainer = () => {
  return (
    <div className="flex h-full w-full flex-col pt-2 md:flex-row md:justify-center md:px-4">
      <PreviewItem
        pageLink={'/calendar'}
        title={'다가오는 일정 →'}
        content={<PreviewCalendar />}
      />
      <PreviewItem
        pageLink={'/diary'}
        title={'우리의 추억들 →'}
        content={<PreviewDiary />}
      />
      <PreviewItem
        pageLink={'/question'}
        title={'오늘의 질문 →'}
        content={<PreviewQuestion />}
      />
    </div>
  );
};

export default PreviewsContainer;
