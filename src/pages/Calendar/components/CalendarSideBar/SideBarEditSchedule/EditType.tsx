import styled from '@emotion/styled';
import { Fragment } from 'react';
import { colors } from '~/theme';
import { useCalendarSideBar } from '~/pages/Calendar/hooks';

const SCHEDULE_TYPE = {
  DATE: '데이트',
  ANNIVERSARY: '기념일',
  TRAVEL: '여행',
  ETC: '기타',
};

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

const EditType = () => {
  const { handleEditInput } = useCalendarSideBar();

  return (
    <>
      <div className="px-4 pb-3">어떤 것을 함께하나요?</div>
      <StyledSelect>
        {(Object.keys(SCHEDULE_TYPE) as Array<keyof typeof SCHEDULE_TYPE>).map(
          (type) => (
            <Fragment key={type}>
              <input
                type="radio"
                name="type"
                id={type}
                onChange={handleEditInput}
                value={type}
              />
              <label htmlFor={type}>{SCHEDULE_TYPE[type]}</label>
            </Fragment>
          ),
        )}
      </StyledSelect>
    </>
  );
};

export default EditType;
