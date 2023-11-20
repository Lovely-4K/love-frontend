import styled from '@emotion/styled';
import { colors } from '~/theme';

interface ScheduleItemProps extends React.HTMLAttributes<HTMLDivElement> {
  customColor: keyof typeof colors.personal;
  startDate: string;
  endDate: string;
  title: string;
}

interface ScheduleItemContainerProps {
  scheduleColor: string;
}

const ScheduleItemContainer = styled.div<ScheduleItemContainerProps>`
  display: flex;
  background-color: ${colors.base.white};
  height: 4rem;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.75rem;
  padding: 0.5rem 2rem;
  border: 1px solid ${(props) => props.scheduleColor};
`;

const ScheduleItem = ({
  customColor,
  startDate,
  endDate,
  title,
}: ScheduleItemProps) => {
  const { personal } = colors;

  return (
    <ScheduleItemContainer scheduleColor={personal[customColor]}>
      <div className="flex">
        <span className="text-sm text-grey-500">{startDate}</span>
        <span className="mx-2 text-sm text-grey-500">~</span>
        <span className="text-sm text-grey-500">{endDate}</span>
      </div>
      <div
        className={`w-full text-base`}
        style={{ color: personal[customColor] }}
      >
        {title}
      </div>
    </ScheduleItemContainer>
  );
};

export default ScheduleItem;
