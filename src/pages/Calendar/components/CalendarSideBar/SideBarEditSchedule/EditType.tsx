import styled from '@emotion/styled';
import { Fragment } from 'react';
import { colors } from '~/theme';

const SCHEDULE_TYPE = ['데이트', '기념일', '여행', '기타'];

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
  return (
    <>
      <div className="px-4 pb-3">어떤 것을 함께하나요?</div>
      <StyledSelect>
        {SCHEDULE_TYPE.map((type) => (
          <Fragment key={type}>
            <input type="radio" name="type" id={type} />
            <label htmlFor={type}>{type}</label>
          </Fragment>
        ))}
      </StyledSelect>
    </>
  );
};

export default EditType;
