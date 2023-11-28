import useDiary from '~/pages/Diary/hooks/Diary/useDiary';

const DiaryRecordsHeader = () => {
  const {
    methods: { handleSortMethod },
  } = useDiary();
  const { handleSortMethodClick } = handleSortMethod;

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
          onClick={() => handleSortMethodClick('createdDate')}
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
