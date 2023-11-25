import { IconTopArrow } from '~/assets/icons';
import useInfo from '~/pages/Diary/hooks/useInfo';
import useMovePrevPage from '~/pages/Diary/hooks/useMovePrevPage';

const DiaryHeader = () => {
  const { info } = useInfo();
  const { movePrevPage } = useMovePrevPage();

  if (!info) return;

  return (
    <div className="font-title flex gap-2 font-bold">
      <button className="text-grey-300">
        <IconTopArrow
          className="h-4 w-4 -rotate-90 fill-grey-300"
          onClick={() => movePrevPage()}
        />
      </button>
      <span>{info.content}</span>
    </div>
  );
};

export default DiaryHeader;
