const DiaryRecordsHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <span className="font-large font-bold text-base-black">
        우리의 추억들
      </span>
      <div className="join">
        <input
          className="btn join-item btn-xs rounded-xl bg-base-white"
          type="radio"
          name="options"
          aria-label="날짜 순"
          defaultChecked
        />
        <input
          className="btn join-item btn-xs rounded-xl bg-base-white"
          type="radio"
          name="options"
          aria-label="평점 순"
        />
      </div>
    </div>
  );
};

export default DiaryRecordsHeader;
