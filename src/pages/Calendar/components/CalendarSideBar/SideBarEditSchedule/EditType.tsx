import styled from '@emotion/styled';
import { Fragment } from 'react';
import { scheduleColors } from '~/constants';
import { colors } from '~/theme';
import { useCalendarSideBar } from '~/pages/Calendar/hooks';

const SCHEDULE_TYPE = {
  DATE: '데이트',
  ANNIVERSARY: '기념일',
  TRAVEL: '여행',
  ETC: '기타',
};

const StyledLabel = styled.label`
  width: 100%;
  cursor: pointer;
  border-radius: 0.75rem;
  padding: 0.3rem 0;
  text-align: center;

  input[type='radio']:disabled + & {
    cursor: default;
  }

  input[type='radio']:disabled + & {
    cursor: default;
  }

  input[type='radio']:checked + & {
    background-color: ${({ color }) => color};
    color: ${colors.base.white};
  }
`;

const EditType = () => {
  const { handleEditInput, scheduleInfo } = useCalendarSideBar();

  const { scheduleType } = scheduleInfo;
  const personalSchedule = scheduleType === 'PERSONAL';

  return (
    <div className={`${personalSchedule && 'opacity-25'}`}>
      <div className="px-4 pb-3">어떤 것을 함께하나요?</div>
      <div className="flex w-full gap-2 px-4">
        {(Object.keys(SCHEDULE_TYPE) as Array<keyof typeof SCHEDULE_TYPE>).map(
          (type) => (
            <Fragment key={type}>
              <input
                type="radio"
                name="scheduleType"
                id={type}
                onChange={handleEditInput}
                value={type}
                checked={type === scheduleType}
                disabled={personalSchedule}
                className="hidden"
              />
              <StyledLabel htmlFor={type} color={scheduleColors[type]}>
                {SCHEDULE_TYPE[type]}
              </StyledLabel>
            </Fragment>
          ),
        )}
      </div>
    </div>
  );
};

export default EditType;
