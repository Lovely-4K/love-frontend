import styled from '@emotion/styled';
import QuestionLabel from './QuestionLabel';
import QuestionSelect from './QuestionSelect';

const QuestionFormContainer = styled.div``;

const QuestionForm = () => {
  return (
    <QuestionFormContainer>
      <QuestionLabel />
      <QuestionSelect />
      <div>
        <button className="btn-small btn-primary float-right w-full rounded-xl hover:border-none hover:bg-base-secondary">
          결정
        </button>
      </div>
    </QuestionFormContainer>
  );
};

export default QuestionForm;
