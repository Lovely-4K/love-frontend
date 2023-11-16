import styled from '@emotion/styled';
import { colors } from '~/theme';

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
  return (
    <>
      <div className="px-4 pb-3">누구의 일정인가요?</div>
      <StyledSelect>
        <input type="radio" name="owner" id={'정'} />
        <label htmlFor={'정'}>정</label>
        <input type="radio" name="owner" id={'호'} />
        <label htmlFor={'호'}>호</label>
        <input type="radio" name="owner" id={'함께'} />
        <label htmlFor={'함께'}>함께</label>
      </StyledSelect>
    </>
  );
};

export default EditOwner;
