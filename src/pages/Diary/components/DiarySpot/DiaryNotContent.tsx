const DiaryNotContent = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <span className="font-medium text-grey-400">
        아직 작성한 기록이 없어요.
      </span>
      <button className="btn-large btn w-full bg-base-primary text-base-white">
        다이어리 작성하기
      </button>
    </div>
  );
};

export default DiaryNotContent;
