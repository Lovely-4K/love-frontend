import styled from '@emotion/styled';
import { CalendarProps } from 'react-calendar';
import { NavigationLabelArgs } from 'react-calendar/dist/cjs/shared/types';
import { screens } from '~/theme';
import { useCalendar, useCalendarMain } from '../../hooks';
import StyledCalendar from './StyledCalendar';

const StyledDot = styled.div`
  height: 0.3rem;
  width: 0.3rem;
  border-radius: 50%;
  background-color: ${({ color }) => color || '#000000'};

  @media (min-width: ${screens.lg}) {
    height: 0.5rem;
    width: 0.5rem;
  }
`;

const CalendarMain = () => {
  const { pickedDate } = useCalendar();
  const { handleMoveToday, handlePickDate } = useCalendarMain();

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
        tileContent={({ view }: CalendarProps) => {
          if (view === 'month') {
            return (
              <div className="flex w-full flex-wrap justify-center gap-1 overflow-hidden px-1 py-1 lg:mb-2">
                <StyledDot color="#9e2929" />
                <StyledDot />
                <StyledDot />
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
          if (action === 'onChange') return;
          handlePickDate(activeStartDate);
        }}
        activeStartDate={pickedDate}
        value={pickedDate}
      />
    </div>
  );
};

export default CalendarMain;
