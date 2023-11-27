import { paths } from '~/router';
import { MainContentProvider } from '../../contexts';
import PreviewCalendar from './PreviewCalendar';
import PreviewDiary from './PreviewDiary';
import PreviewItem from './PreviewItem';
import PreviewQuestion from './PreviewQuestion';

const PreviewsContainer = () => {
  return (
    <MainContentProvider>
      <div className="flex h-full w-full flex-col gap-5 pt-2 lg:flex-row lg:justify-center lg:gap-0 lg:px-4">
        <PreviewItem
          pageLink={paths.CALENDAR}
          title={'다가오는 일정'}
          content={<PreviewCalendar />}
        />
        <PreviewItem
          pageLink={paths.DIARY}
          title={'우리의 추억들'}
          content={<PreviewDiary />}
        />
        <PreviewItem
          pageLink={paths.QUESTION}
          title={'오늘의 질문'}
          content={<PreviewQuestion />}
        />
      </div>
    </MainContentProvider>
  );
};

export default PreviewsContainer;
