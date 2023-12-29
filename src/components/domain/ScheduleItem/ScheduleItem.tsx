import styled from '@emotion/styled';
import { colors, fontSize, screens } from '~/theme';
import type { Schedule } from '~/types';
import { IconTrash } from '~/assets/icons';
import { useDeleteSchedule } from '~/services/calendar';

interface ScheduleItemProps extends React.HTMLAttributes<HTMLDivElement> {
  customColor: string;
  schedule: Schedule;
  mySchedule?: boolean;
}
interface StyledProps {
  customColor: string;
}
const ScheduleItemContainer = styled.div<StyledProps>`
  display: flex;
  background-color: ${colors.base.white};
  flex-direction: column;
  justify-content: center;
  border-radius: 0.75rem;
  padding: 0.75rem 1.7rem;
  border: 1px solid
    ${({ customColor }) => (customColor ? customColor : colors.personal.purple)};
  cursor: pointer;
  min-width: 13rem;
  gap: 0.3rem;
  &:hover {
    background-color: ${({ customColor }) => {
      if (!customColor) return colors.base.white;
      const color = customColor.substring(1);
      const r = parseInt(color.slice(0, 2), 16);
      const g = parseInt(color.slice(2, 4), 16);
      const b = parseInt(color.slice(4, 6), 16);
      const opacity = 0.2;

      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }};
  }
  @media screen and (min-width: ${screens.lg}) {
    width: 100%;
  }
`;
const ScheduleDate = styled.span`
  white-space: nowrap;
  font-size: ${fontSize.sm};
  padding-right: 0.25rem;
  color: ${colors.grey[500]};
`;

const ScheduleTitle = styled.span<StyledProps>`
  width: 100%;
  font-size: ${fontSize.base};
  color: ${({ customColor }) => customColor};
`;

const ScheduleItem = ({
  customColor,
  schedule,
  mySchedule = false,
  ...props
}: ScheduleItemProps) => {
  const { mutate: deleteSchedule } = useDeleteSchedule();
  const { startDate, endDate, scheduleDetails } = schedule;
  const hasEndDate = startDate !== endDate;
  const handleDeleteSchedule = ({
    event,
    scheduleId,
  }: {
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>;
    scheduleId: number;
  }) => {
    event.stopPropagation();
    deleteSchedule({ scheduleId });
  };

  return (
    <ScheduleItemContainer customColor={customColor} {...props}>
      <div className="flex flex-wrap items-center">
        <div>
          <span className="flex">
            <ScheduleDate>{startDate}</ScheduleDate>
            {hasEndDate && <ScheduleDate>~</ScheduleDate>}
          </span>
          {mySchedule && (
            <button
              className="group absolute right-6 top-3"
              onClick={(event) =>
                handleDeleteSchedule({
                  event,
                  scheduleId: schedule.calendarId,
                })
              }
            >
              <IconTrash className="h-4 w-4 stroke-grey-400 group-hover:stroke-base-black" />
            </button>
          )}
        </div>
        {hasEndDate && <ScheduleDate>{endDate}</ScheduleDate>}
      </div>
      <ScheduleTitle customColor={customColor}>{scheduleDetails}</ScheduleTitle>
    </ScheduleItemContainer>
  );
};
export default ScheduleItem;
