import styled from '@emotion/styled';
import QuestionLabel from './QuestionLabel';
import QuestionSelect from './QuestionSelect';

const QuestionFormContainer = styled.div``;

const QuestionForm = () => {
  return (
    <QuestionFormContainer>
      <QuestionLabel />
      <QuestionSelect />
    </QuestionFormContainer>
  );
};

export default QuestionForm;
