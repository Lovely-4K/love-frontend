import styled from '@emotion/styled';
import { colors, fontSize, screens } from '~/theme';

interface ScheduleItemProps extends React.HTMLAttributes<HTMLDivElement> {
  customColor: string;
  startDate: string;
  endDate: string;
  title: string;
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
  border: 1px solid ${(props) => props.customColor};
  cursor: pointer;
  min-width: 13rem;
  gap: 0.3rem;

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
  startDate,
  endDate,
  title,
  ...props
}: ScheduleItemProps) => {
  const hasEndDate = startDate !== endDate;

  return (
    <ScheduleItemContainer customColor={customColor} {...props}>
      <div className="flex flex-wrap items-center">
        <span className="flex">
          <ScheduleDate>{startDate}</ScheduleDate>
          {hasEndDate && <ScheduleDate>~</ScheduleDate>}
        </span>
        {hasEndDate && <ScheduleDate>{endDate}</ScheduleDate>}
      </div>
      <ScheduleTitle customColor={customColor}>{title}</ScheduleTitle>
    </ScheduleItemContainer>
  );
};

export default ScheduleItem;
