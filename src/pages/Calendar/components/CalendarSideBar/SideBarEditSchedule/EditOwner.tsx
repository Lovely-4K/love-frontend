import styled from '@emotion/styled';
import { colors } from '~/theme';
import { useCalendarSideBar } from '~/pages/Calendar/hooks';

const StyledSelect = styled.label`
  display: flex;
  width: 100%;
  gap: 0.5rem;
  padding: 0 1rem;

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
    background-color: ${colors.grey[300]};
    color: ${colors.base.white};
  }
`;

const EditOwner = () => {
  const { handleEditInput, scheduleInfo } = useCalendarSideBar();

  const { scheduleType } = scheduleInfo;

  return (
    <>
      <div className="px-4 pb-3">누구의 일정인가요?</div>
      <StyledSelect>
        <input
          type="radio"
          name="ownerType"
          id="PERSONAL"
          value="PERSONAL"
          onChange={handleEditInput}
          checked={scheduleType === 'PERSONAL'}
        />
        <label htmlFor="PERSONAL">나</label>
        <input
          type="radio"
          name="ownerType"
          id="COUPLE"
          value="COUPLE"
          onChange={handleEditInput}
          checked={scheduleType !== 'PERSONAL'}
        />
        <label htmlFor="COUPLE">우리</label>
      </StyledSelect>
    </>
  );
};

export default EditOwner;
