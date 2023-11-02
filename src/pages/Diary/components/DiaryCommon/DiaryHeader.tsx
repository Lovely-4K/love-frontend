import { IconTopArrow } from '~/assets/icons';

const DiaryHeader = () => {
  return (
    <>
      <div className="font-title flex gap-2 font-bold">
        <button className="text-grey-300">
          <IconTopArrow className="h-4 w-4 -rotate-90 fill-grey-300" />
        </button>
        <span>김선익 내과</span>
      </div>
    </>
  );
};

export default DiaryHeader;
