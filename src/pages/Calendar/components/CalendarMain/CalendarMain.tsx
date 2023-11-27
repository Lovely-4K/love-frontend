import styled from '@emotion/styled';
import { format } from 'date-fns';
import {
  NavigationLabelArgs,
  View,
} from 'react-calendar/dist/cjs/shared/types';
import { screens } from '~/theme';
import { Schedule } from '~/types';
import { getScheduleColor } from '~/utils';
import { useCalendar, useCalendarMain } from '../../hooks';
import StyledCalendar from './StyledCalendar';

const StyledDot = styled.div`
  height: 0.3rem;
  width: 0.3rem;
  border-radius: 50%;
  background-color: ${({ color }) => color || '#000000'};

  @media (min-width: ${screens.md}) {
    height: 0.4rem;
    width: 0.4rem;
  }

  @media (min-width: ${screens.lg}) {
    height: 0.5rem;
    width: 0.5rem;
  }
`;

const CalendarMain = () => {
  const { pickedDate, getMonthScheduleQuery } = useCalendar();
  const { handleMoveToday, handlePickDate } = useCalendarMain();
  const { data, isSuccess } = getMonthScheduleQuery;

  const NavigationButton = () => {
    return (
      <>
        <span>{'<'}</span>
        <span onClick={handleMoveToday} className="text-base lg:text-lg">
          오늘
        </span>
      </>
    );
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <StyledCalendar
        activate={isSuccess}
        locale="en-US"
        minDetail="year"
        onClickDay={handlePickDate}
        next2Label={null}
        prev2Label={null}
        prevLabel={<NavigationButton />}
        nextLabel={<span>{'>'}</span>}
        navigationLabel={({ date }: NavigationLabelArgs) =>
          `${date.getFullYear()} ${date.getMonth() + 1}월`
        }
        formatMonth={(_: string, date: Date) => {
          return `${date.getMonth() + 1}월`;
        }}
        tileContent={({ view, date }: { view: View; date: string }) => {
          const formateDate = format(new Date(date), 'yyyy-MM-dd');
          const schedules: Schedule[] = [];

          if (view === 'month') {
            if (!isSuccess) return;

            data.schedules.map((schedule) => {
              if (
                schedule.startDate <= formateDate &&
                schedule.endDate >= formateDate
              ) {
                schedules.push(schedule);
              }
            });

            return (
              <div className="flex h-6 w-full flex-wrap items-center justify-center gap-[0.1rem] overflow-hidden px-1 md:gap-1">
                {schedules.length > 0 &&
                  schedules.map((schedule, idx) => {
                    if (idx >= 4) return;

                    if (idx === 3)
                      return (
                        <span
                          className="text-[0.5rem] text-grey-500 md:text-[0.6rem] lg:text-sm"
                          key={schedule.calendarId}
                        >
                          +{schedules.length - 3}
                        </span>
                      );

                    return (
                      <StyledDot
                        key={schedule.calendarId}
                        color={getScheduleColor(schedule, data.colorInfo)}
                      />
                    );
                  })}
              </div>
            );
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
          handlePickDate(activeStartDate);
        }}
        activeStartDate={pickedDate}
        value={pickedDate}
      />
    </div>
  );
};

export default CalendarMain;
