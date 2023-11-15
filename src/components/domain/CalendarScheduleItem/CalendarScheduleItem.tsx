import styled from '@emotion/styled';
import { colors } from '~/theme';

interface CalendarScheduleItemProps {
  customColor: keyof typeof colors.personal;
  date: string;
  title: string;
}

const CalendarScheduleItemContainer = styled.div`
  display: flex;
  height: 4rem;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.75rem;
  padding: 0.5rem 2rem;
`;

const CalendarScheduleItem = ({
  customColor,
  date,
  title,
}: CalendarScheduleItemProps) => {
  const { personal } = colors;

  return (
    <CalendarScheduleItemContainer
      className="border border-solid bg-base-white"
      style={{ borderColor: personal[customColor] }}
    >
      <div className="font-small w-full text-grey-500">{date}</div>
      <div
        className={`w-full text-base`}
        style={{ color: personal[customColor] }}
      >
        {title}
      </div>
    </CalendarScheduleItemContainer>
  );
};

export default CalendarScheduleItem;
