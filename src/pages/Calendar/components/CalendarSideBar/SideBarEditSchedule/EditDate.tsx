import { IconLeftArrow } from '~/assets/icons';
import { useCalendarSideBar } from '~/pages/Calendar/hooks';

const EditDate = () => {
  const { scheduleInfo, handleEditInput } = useCalendarSideBar();

  const { startDate, endDate } = scheduleInfo;

  return (
    <div className="flex items-center justify-evenly gap-2 px-4">
      <div>
        <label htmlFor="startDate">시작</label>
        <input
          id="startDate"
          className="h-5 w-full bg-transparent p-0"
          type="date"
          name="startDate"
          value={startDate}
          onChange={handleEditInput}
        />
      </div>
      <IconLeftArrow className="mx-2 h-5 w-5 flex-shrink-0 rotate-180 fill-base-black stroke-base-black" />
      <div>
        <label htmlFor="endDate">종료</label>
        <input
          id="endDate"
          className="h-5 w-full bg-transparent p-0"
          type="date"
          name="endDate"
          value={endDate}
          onChange={handleEditInput}
        />
      </div>
    </div>
  );
};

export default EditDate;
