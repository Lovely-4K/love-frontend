import DiaryCreateButton from '~/pages/Diary/components/DiarySpot/DiaryCreateButton';

const DiaryNotContent = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <span className="font-medium text-grey-400">
        아직 작성한 기록이 없어요.
      </span>
      <DiaryCreateButton />
    </div>
  );
};

export default DiaryNotContent;
