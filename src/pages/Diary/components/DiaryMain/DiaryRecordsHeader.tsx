import { useState } from 'react';
import useGetDiarys from '~/pages/Diary/hooks/useGetDiarys';

const DiaryRecordsHeader = () => {
  const [sortMethod, setSortMethod] = useState('createdDate');
  const { data: diarys, isSuccess } = useGetDiarys({ sortMethod });

  const handleSortMethodChange = (newSortMethod: string) => {
    setSortMethod(newSortMethod);
  };

  if (!isSuccess) return null;

  console.log(diarys);

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
          onClick={() => handleSortMethodChange('createdDate')}
          defaultChecked
        />
        <input
          className="btn join-item btn-xs rounded-xl bg-base-white"
          type="radio"
          name="options"
          aria-label="평점 순"
          onClick={() => handleSortMethodChange('rating')}
        />
      </div>
    </div>
  );
};

export default DiaryRecordsHeader;
