import styled from '@emotion/styled';
import { colors, screens } from '~/theme';
import { useCalendarSideBar } from '../../../hooks';
import EditDate from './EditDate';
import EditInput from './EditInput';
import EditOwner from './EditOwner';
import EditType from './EditType';
import { Button } from '~/components/common';

const StyledDivider = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  height: 1rem;
  white-space: nowrap;
  padding: 1rem 0;
  @media (min-width: ${screens.lg}) {
    padding: 1.25rem 0;
  }

  &:before,
  &:after {
    content: '';
    flex-grow: 1;
    width: 100%;
    height: 0.125rem;
    background-color: ${colors.grey[200]};
  }
`;

const SideBarEditSchedule = () => {
  const { closeEditSchedule, saveEditSchedule } = useCalendarSideBar();

  return (
    <div>
      <EditInput />
      <StyledDivider />
      <EditDate />
      <StyledDivider />
      <EditOwner />
      <StyledDivider />
      <EditType />
      <StyledDivider />
      <div className="flex justify-end gap-2 px-2">
        <Button
          onClick={closeEditSchedule}
          size="small"
          className="border border-grey-200 bg-base-white"
        >
          취소
        </Button>
        <Button
          onClick={saveEditSchedule}
          size="small"
          className="bg-base-primary text-base-white"
        >
          저장
        </Button>
      </div>
    </div>
  );
};

export default SideBarEditSchedule;
