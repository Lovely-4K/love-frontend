import styled from '@emotion/styled';
import { useAtomValue } from 'jotai';
import { screens } from '~/theme';
import { getScheduleColor } from '~/utils';
import { currentMonthRangeAtom } from '../../stores/calendarAtom';
import { getDaySchedules } from '../../utils';
import { useGetMonthSchedule } from '~/services/calendar';

interface ScheduleDotsProps {
  date: string;
}

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

const ScheduleDots = ({ date }: ScheduleDotsProps) => {
  const currentMonthRange = useAtomValue(currentMonthRangeAtom);
  const { data, isSuccess } = useGetMonthSchedule(currentMonthRange);

  if (!isSuccess) return null;

  const daySchedules = getDaySchedules({ schedules: data.schedules, date });

  return (
    <div className="flex h-6 w-full flex-wrap items-center justify-center gap-[0.1rem] overflow-hidden px-1 md:gap-1">
      {daySchedules.length > 0 &&
        daySchedules.map((schedule, idx) => {
          if (idx >= 4) return;

          if (idx === 3)
            return (
              <span
                className="text-[0.5rem] text-grey-500 md:text-[0.6rem] lg:text-sm"
                key={schedule.calendarId}
              >
                +{daySchedules.length - 3}
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
};

export default ScheduleDots;
