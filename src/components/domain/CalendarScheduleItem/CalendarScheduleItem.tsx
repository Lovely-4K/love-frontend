import styled from '@emotion/styled';
import { colors } from '~/theme';

interface CalendarScheulItemProps {
  customColor: keyof typeof colors.personal;
  date: string;
  title: string;
}

const CalendarScheduleItemContainer = styled.div`
  margin: 0.5rem;
  display: flex;
  height: 4rem;
  width: 15.385rem;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.75rem;
  padding: 0.5rem 2rem;
`;

const CalendarScheduleItem = ({
  customColor,
  date,
  title,
}: CalendarScheulItemProps) => {
  const { personal } = colors;

  return (
    <CalendarScheduleItemContainer
      className="border border-solid bg-base-white"
      style={{ borderColor: personal[customColor] }}
    >
      <div className="font-small w-full text-grey-500">{date}</div>
      <div
        className={`font-medium w-full`}
        style={{ color: personal[customColor] }}
      >
        {title}
      </div>
    </CalendarScheduleItemContainer>
  );
};

export default CalendarScheduleItem;
