import styled from '@emotion/styled';
import { CalendarProps } from 'react-calendar';
import { NavigationLabelArgs } from 'react-calendar/dist/cjs/shared/types';
import { screens } from '~/theme';
import { useCalendar, useCalendarMain } from '../hooks';
import StyledCalendar from './StyledCalendar';
import 'react-calendar/dist/Calendar.css';

const StyledDot = styled.div`
  height: 0.3rem;
  width: 0.3rem;
  border-radius: 50%;
  background-color: ${({ color }) => color || '#000000'};

  @media (min-width: ${screens.lg}) {
    height: 0.75rem;
    width: 0.75rem;
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
            <div className="flex w-full flex-wrap justify-center gap-1 overflow-hidden px-1 py-1 lg:mb-1">
              <StyledDot color="#9e2929" />
              <StyledDot />
              <StyledDot />
            </div>
          );
        }
      }}
      onActiveStartDateChange={({ activeStartDate }: CalendarProps) => {
        if (!activeStartDate) return;
        handlePickDate(activeStartDate);
      }}
      activeStartDate={pickedDate}
    />
  );
};

export default CalendarMain;
