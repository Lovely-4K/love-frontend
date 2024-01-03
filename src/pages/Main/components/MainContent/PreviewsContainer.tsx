import { paths } from '~/router';
import PreviewCalendar from './PreviewCalendar';
import PreviewDiary from './PreviewDiary';
import PreviewItem from './PreviewItem';
import PreviewQuestion from './PreviewQuestion';

const PreviewsContainer = () => {
  return (
    <div className="flex h-[58%] w-full flex-col gap-8 pt-2 lg:flex-row lg:justify-center lg:gap-0 lg:px-4">
      <PreviewItem
        pageLink={paths.DIARY.ROOT}
        title={'우리의 추억들'}
        content={<PreviewDiary />}
      />
      <PreviewItem
        pageLink={paths.CALENDAR}
        title={'다가오는 일정'}
        content={<PreviewCalendar />}
      />
      <PreviewItem
        pageLink={paths.QUESTION}
        title={'오늘의 질문'}
        content={<PreviewQuestion />}
      />
    </div>
  );
};

export default PreviewsContainer;
