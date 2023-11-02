import styled from '@emotion/styled';
import { MouseEvent, useState } from 'react';
import Calendar from 'react-calendar';
import { colors, font, screens } from '~/theme';
import 'react-calendar/dist/Calendar.css';

const StyledCalendar = styled(Calendar)`
  width: 100%;
  height: 100%;
  border: none;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: ${screens.lg}) {
    padding: 1rem 2.5rem;
  }

  .react-calendar__navigation {
    align-items: center;
    margin-bottom: 0;
    max-height: 5rem;

    button {
      background-color: transparent;
      &:not([disabled]):hover {
        background-color: transparent;
      }
      &:focus {
        background-color: transparent;
      }
    }

    &__label {
      order: 1;
      ${font['.font-large']};
      align-self: center;
      text-align: start;
      height: 2rem;
      padding-left: 1rem;

      @media (min-width: ${screens.lg}) {
        ${font['.font-title-large']};
        height: 3rem;
        margin-bottom: 3rem;
      }
    }

    &__arrow {
      order: 2;
      min-width: fit-content;
      span {
        padding: 0.3rem 0.5rem;
        border-radius: 0.5rem;
        &:hover {
          background-color: ${colors.grey[200]};
        }
      }
    }
  }

  .react-calendar__month-view {
    &__weekdays {
      margin-bottom: 0.5rem;
      position: relative;

      &::after {
        position: absolute;
        content: '';
        width: 100%;
        height: 1px;
        bottom: -0.5rem;
        background-color: ${colors.grey[200]};
      }

      abbr {
        text-decoration: none;
        ${font['.font-medium']}
        font-weight: 500;

        @media (min-width: ${screens.lg}) {
          font-size: 1.5rem;
        }

        &[aria-label='Saturday'] {
          color: ${colors.personal.blue};
        }

        &[aria-label='Sunday'] {
          color: ${colors.base.primary};
        }
      }
    }

    &__days {
      &__day {
        &:hover {
          background-color: ${colors.grey[100]};
        }

        &--weekend {
          :nth-of-type(1n) {
            color: ${colors.base.primary};
          }
          :nth-of-type(7n) {
            color: ${colors.personal.blue};
          }
        }

        &--neighboringMonth {
          color: ${colors.grey[400]};
          abbr,
          div {
            opacity: 0.5;
          }
        }
      }
    }
  }

  .react-calendar__tile {
    text-align: center;
    height: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    ${font['.font-small']}
    font-weight: 100;
    border-bottom: 1px solid ${colors.grey[200]};
    padding: 0.2rem;

    @media (min-width: ${screens.lg}) {
      ${font['.font-title']}
      min-height: 5.5rem;
      max-height: 8rem;
      padding: 0.5rem;
    }

    abbr {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1.5rem;
      height: 1.5rem;
    }

    &--now {
      abbr {
        background-color: ${colors.base.secondary};
        color: ${colors.base.white};
        border-radius: 50%;
      }
    }
  }
`;

const CalendarMain = () => {
  const [pickedDate, setPickedDate] = useState(new Date());

  const handleChangeDate = (date: Date) => {
    setPickedDate(date);
  };

  const handleMoveToday = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setPickedDate(new Date());
  };

  return (
    <StyledCalendar
      locale="en-US"
      minDetail="year"
      onClickDay={handleChangeDate}
      next2Label={null}
      prev2Label={null}
      prevLabel={
        <>
          <span>{'<'}</span>
          <span onClick={handleMoveToday} className="font-medium lg:font-large">
            오늘
          </span>
        </>
      }
      nextLabel={<span>{'>'}</span>}
      navigationLabel={({ date }) =>
        `${date.getFullYear()} ${date.getMonth() + 1}월`
      }
      // tileContent={({ activeStartDate, date, view }) => {
      //   if (view === 'month') {
      //     return (
      //       <div className="flex w-full flex-wrap justify-center gap-1 overflow-hidden px-3 py-3">
      //         <div className="badge badge-primary badge-xs" />
      //         <div className="badge badge-primary badge-xs" />
      //       </div>
      //     );
      //   }
      // }}
      onActiveStartDateChange={({ activeStartDate }) => {
        if (!activeStartDate) return;
        handleChangeDate(activeStartDate);
      }}
      activeStartDate={pickedDate}
    />
  );
};

export default CalendarMain;
