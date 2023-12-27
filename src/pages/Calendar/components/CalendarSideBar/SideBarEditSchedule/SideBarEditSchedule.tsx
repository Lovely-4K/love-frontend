import styled from '@emotion/styled';
import { useAtomValue, useSetAtom } from 'jotai';
import { colors, screens } from '~/theme';
import EditDate from './EditDate';
import EditInput from './EditInput';
import EditOwner from './EditOwner';
import EditType from './EditType';
import { Button } from '~/components/common';
import {
  closeScheduleEditAtom,
  editScheduleInfoAtom,
} from '~/pages/Calendar/stores/calendarAtom';
import { useCreateSchedule, useEditSchedule } from '~/services/calendar';

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
  const closeScheduleEdit = useSetAtom(closeScheduleEditAtom);
  const editScheduleInfo = useAtomValue(editScheduleInfoAtom);
  const { mutate: createSchedule } = useCreateSchedule();
  const { mutate: patchSchedule } = useEditSchedule();

  const saveEditSchedule = () => {
    if (editScheduleInfo.calendarId !== -1) {
      patchSchedule({
        schedule: editScheduleInfo,
        scheduleId: editScheduleInfo.calendarId,
      });
    } else {
      createSchedule({ schedule: editScheduleInfo });
    }
    closeScheduleEdit();
  };

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
          onClick={closeScheduleEdit}
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
