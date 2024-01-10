import { useToast } from '~/hooks';
import useInitDiaryContent from '../../hooks/DiaryContent/useInitDiaryContent';
import DiaryContentCategories from './DiaryContentCategories';
import DiaryContentDate from './DiaryContentDate';
import DiaryContentEditButton from './DiaryContentEditButton';
import DiaryContentHeader from './DiaryContentHeader';
import DiaryContentImgsSection from './DiaryContentImgsSection';
import DiaryContentScore from './DiaryContentScore';
import DiaryContentTextSection from './DiaryContentTextSection';
import DiaryContentToast from './DiaryContentToast';

interface DiaryContentProps {
  editable: boolean;
}

const DiaryContent = ({ editable }: DiaryContentProps) => {
  const { showToast } = useToast();
  useInitDiaryContent({ editable });

  return (
    <div className="flex w-full flex-col gap-6 overflow-y-auto overflow-x-hidden">
      {showToast && <DiaryContentToast />}
      <DiaryContentHeader />
      <div className="flex flex-col gap-6 overflow-y-auto px-3">
        <div className="flex items-center justify-between">
          <DiaryContentDate />
          <DiaryContentScore />
        </div>
        <DiaryContentCategories />
        <div className="flex flex-col gap-4 py-2">
          <DiaryContentImgsSection />
          <DiaryContentTextSection />
        </div>
        <DiaryContentEditButton />
      </div>
    </div>
  );
};

export default DiaryContent;
