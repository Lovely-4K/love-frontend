import styled from '@emotion/styled';
import { useAtomValue, useSetAtom } from 'jotai';
import { colors } from '~/theme';
import {
  editScheduleInfoAtom,
  setEditScheduleInfoAtom,
} from '~/pages/Calendar/stores/calendarAtom';

const StyledSelect = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
  padding: 0 1rem;
  font-weight: 900;

  input[type='radio'] {
    display: none;
  }

  input[type='radio'] + label {
    width: 100%;
    cursor: pointer;
    border-radius: 0.75rem;
    padding: 0.3rem 0;
    text-align: center;
  }

  input[type='radio']:checked + label {
    color: ${colors.base.primary};
  }
`;

const EditOwner = () => {
  const editScheduleInfo = useAtomValue(editScheduleInfoAtom);
  const setEditScheduleInfo = useSetAtom(setEditScheduleInfoAtom);

  const { scheduleType } = editScheduleInfo;

  return (
    <>
      <div className="px-4 pb-3">누구의 일정인가요?</div>
      <StyledSelect>
        <input
          type="radio"
          name="ownerType"
          id="PERSONAL"
          value="PERSONAL"
          onChange={setEditScheduleInfo}
          checked={scheduleType === 'PERSONAL'}
        />
        <label htmlFor="PERSONAL">나</label>
        <input
          type="radio"
          name="ownerType"
          id="COUPLE"
          value="COUPLE"
          onChange={setEditScheduleInfo}
          checked={scheduleType !== 'PERSONAL'}
        />
        <label htmlFor="COUPLE">우리</label>
      </StyledSelect>
    </>
  );
};

export default EditOwner;
