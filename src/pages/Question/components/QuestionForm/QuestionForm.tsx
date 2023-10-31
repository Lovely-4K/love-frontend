import styled from '@emotion/styled';
import QuestionFormLabel from './QuestionFormLabel';
import QuestionFormSelect from './QuestionFormSelect';

const QuestionFormContainer = styled.div``;

/** @todo - selected Item 이 없으면 button disabled 처리하기 */
const QuestionForm = () => {
  return (
    <QuestionFormContainer>
      <QuestionFormLabel />
      <QuestionFormSelect />
      <div>
        <button className="btn-small btn-primary float-right w-full rounded-xl hover:border-none hover:bg-base-secondary">
          결정
        </button>
      </div>
    </QuestionFormContainer>
  );
};

export default QuestionForm;
