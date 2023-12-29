import { useAtomValue, useSetAtom } from 'jotai';
import { memo } from 'react';
import { View } from 'react-calendar/dist/cjs/shared/types';
import {
  changePickedDateAtom,
  currentMonthRangeAtom,
  pickedDateAtom,
} from '../../stores/calendarAtom';
import ScheduleDots from './ScheduleDots';
import StyledCalendar from './StyledCalendar';
import { useGetMonthSchedule } from '~/services/calendar';

const CalendarMain = () => {
  const pickedDate = useAtomValue(pickedDateAtom);
  const changePickedDate = useSetAtom(changePickedDateAtom);
  const currentMonthRange = useAtomValue(currentMonthRangeAtom);
  const { isSuccess } = useGetMonthSchedule(currentMonthRange);

  const NavigationButton = memo(() => {
    return (
      <>
        <span>{'<'}</span>
        <span
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            changePickedDate(new Date());
          }}
          className="text-base lg:text-lg"
        >
          오늘
        </span>
      </>
    );
  });

  return (
    <div className="flex h-full w-full items-center justify-center">
      <StyledCalendar
        activate={isSuccess}
        locale="en-US"
        minDetail="year"
        onClickDay={changePickedDate}
        next2Label={null}
        prev2Label={null}
        prevLabel={<NavigationButton />}
        nextLabel={<span>{'>'}</span>}
        navigationLabel={({ date }: { date: Date }) =>
          `${date.getFullYear()} ${date.getMonth() + 1}월`
        }
        formatMonth={(_: string, date: Date) => {
          return `${date.getMonth() + 1}월`;
        }}
        tileContent={({ view, date }: { view: View; date: string }) => {
          if (view === 'month') {
            return <ScheduleDots date={date} />;
          }
        }}
        onActiveStartDateChange={({
          action,
          activeStartDate,
        }: {
          action: string;
          activeStartDate: Date;
        }) => {
          if (action === 'onChange' || action === 'drillUp') return;
          changePickedDate(activeStartDate);
        }}
        activeStartDate={pickedDate}
        value={pickedDate}
      />
    </div>
  );
};

export default CalendarMain;
