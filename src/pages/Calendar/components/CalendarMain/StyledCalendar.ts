import styled from '@emotion/styled';
import Calendar from 'react-calendar';
import { colors, fontSize, screens } from '~/theme';

const StyledCalendar = styled(Calendar)<{ activate: boolean }>`
  width: 100%;
  height: 100%;
  border: none;
  padding: 1rem 1rem;

  @media (min-width: ${screens.lg}) {
    padding: 1rem 2.5rem;
    height: 44rem;
  }

  // 달력 네이게이션(앞, 뒤, 오늘 버튼)
  .react-calendar__navigation {
    width: 100%;
    align-items: center;
    margin-bottom: 1;
    max-height: 5rem;
    display: flex;

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
      flex-grow: 0 !important;
      margin-right: auto;
      margin-bottom: 1rem;
      order: 1;
      font-size: ${fontSize.xl};
      align-self: center;
      text-align: start;
      height: 2rem;
      padding-left: 0.7rem;

      @media (min-width: ${screens.lg}) {
        font-size: ${fontSize['2xl']};
        height: 3rem;
        margin-bottom: 3rem;
        padding-left: 1rem;
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

  // 하나의 월 보기 컨테이너
  .react-calendar__month-view {
    // 요일 타일(월~일)
    &__weekdays {
      text-align: center;
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
        font-size: ${fontSize.base};
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

    // 달력의 일자
    &__days {
      &__day {
        text-align: center;
        height: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        ${({ activate }) => !activate && 'opacity: 0.6'};

        @media (min-width: ${screens.md}) {
          height: 4.5rem;
        }

        @media (min-width: ${screens.lg}) {
          height: 5.5rem;
        }

        abbr {
          margin-top: 0.3rem;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 1.2rem;
          height: 1.2rem;

          @media (min-width: ${screens.lg}) {
            width: 1.5rem;
            height: 1.5rem;
          }
        }

        // 오늘 날짜
        &.react-calendar__tile--now {
          abbr {
            background-color: ${colors.base.secondary};
            color: ${colors.base.white};
            border-radius: 50%;
          }
        }

        // 일요일, 토요일 타일
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

  // 월 선택 타일
  .react-calendar__year-view__months {
    &__month {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 4rem;

      @media (min-width: ${screens.lg}) {
        height: 7rem;
      }
    }

    .react-calendar__tile--now {
      display: flex;
      justify-content: center;
      align-items: center;
      abbr {
        padding: 0.2rem 0.3rem;
        border-radius: 0.75rem;
        background-color: ${colors.base.secondary};
        color: ${colors.base.white};
      }
    }
  }

  // 각 타일의 스타일(월, 일 포함)
  .react-calendar__tile {
    font-size: ${fontSize.sm};
    font-weight: 100;
    border-bottom: 1px solid ${colors.grey[200]};
    padding: 0.2rem;

    @media (min-width: ${screens.lg}) {
      font-size: ${fontSize.lg};
      padding: 0.5rem;
    }

    &:hover {
      background-color: ${colors.grey[100]};
    }
    &--active {
      background-color: ${colors.grey[200]};
    }
  }
`;

export default StyledCalendar;
