import { ChangeEvent, useState } from 'react';

const formatTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const DdayContainer = () => {
  const [initialDate, setInitialDate] = useState(formatTodayDate());

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInitialDate(event.target.value);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-16">
        <span className="font-title text-base-black">
          연인이 된 날이 언제인가요?
        </span>
        <input
          className="font-title text-base-black focus:outline-none"
          type="date"
          value={initialDate}
          onChange={handleDateChange}
        />
      </div>
    </>
  );
};

export default DdayContainer;
