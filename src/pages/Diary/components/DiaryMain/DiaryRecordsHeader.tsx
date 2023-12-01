import useDiaryMainContext from '../../hooks/DiaryMain/useDiaryMainContext';

const DiaryRecordsHeader = () => {
  const diaryMainContext = useDiaryMainContext();
  const { handleSortMethodClick } = diaryMainContext;

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
          onClick={() => handleSortMethodClick('datingDay')}
          defaultChecked
        />
        <input
          className="btn join-item btn-xs rounded-xl bg-base-white"
          type="radio"
          name="options"
          aria-label="평점 순"
          onClick={() => handleSortMethodClick('score')}
        />
      </div>
    </div>
  );
};

export default DiaryRecordsHeader;
